import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Directive({
    selector: '[efoSort]'
})
export class EfoSortDirective {
    @Input() predicate!: string;
    @Input() ascending!: boolean;
    @Input() callback!: Function;

    @Output() predicateChange: EventEmitter<string> = new EventEmitter();
    @Output() ascendingChange: EventEmitter<boolean> = new EventEmitter();

    activeIconComponent!: FaIconComponent;

    constructor() {
    }

    sort(field: string): any {
        this.ascending = field !== this.predicate ? true : !this.ascending;
        this.predicate = field;
        this.predicateChange.emit(field);
        this.ascendingChange.emit(this.ascending);
        this.callback();
    }
}
