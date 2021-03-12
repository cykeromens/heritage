import {AfterContentInit, ContentChild, Directive, Host, HostListener, Input} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

import {EfoConfigService} from '../config.service';
import {EfoSortDirective} from './sort.directive';

@Directive({
    selector: '[efoSortBy]'
})
export class EfoSortByDirective implements AfterContentInit {
    @Input() efoSortBy!: string;
    @ContentChild(FaIconComponent, {static: true}) iconComponent!: FaIconComponent;

    sortIcon: IconDefinition;
    sortAscIcon: IconDefinition;
    sortDescIcon: IconDefinition;

    constructor(@Host() private efoSort: EfoSortDirective, configService: EfoConfigService) {
        this.efoSort = efoSort;
        const config = configService.getConfig();
        this.sortIcon = config.sortIcon;
        this.sortAscIcon = config.sortAscIcon;
        this.sortDescIcon = config.sortDescIcon;
    }

    ngAfterContentInit(): void {
        if (this.efoSort.predicate && this.efoSort.predicate !== '_score' && this.efoSort.predicate === this.efoSortBy) {
            this.updateIconDefinition(this.iconComponent, this.efoSort.ascending ? this.sortAscIcon : this.sortDescIcon);
            this.efoSort.activeIconComponent = this.iconComponent;
        }
    }

    @HostListener('click')
    onClick(): any {
        if (this.efoSort.predicate && this.efoSort.predicate !== '_score') {
            this.efoSort.sort(this.efoSortBy);
            this.updateIconDefinition(this.efoSort.activeIconComponent, this.sortIcon);
            this.updateIconDefinition(this.iconComponent, this.efoSort.ascending ? this.sortAscIcon : this.sortDescIcon);
            this.efoSort.activeIconComponent = this.iconComponent;
        }
    }

    private updateIconDefinition(iconComponent: FaIconComponent, icon: IconDefinition): any {
        if (iconComponent) {
            iconComponent.icon = icon;
            iconComponent.ngOnChanges({});
        }
    }
}
