import {Component, Input} from '@angular/core';
import {EfoConfigService} from '../config.service';

@Component({
    selector: 'efo-item-count',
    template: `

        <ng-template class="info efo-item-count">
            Showing
            {{ (page - 1) * itemsPerPage == 0 ? 1 : (page - 1) * itemsPerPage + 1 }}
            - {{ page * itemsPerPage < total ? page * itemsPerPage : total }} of {{ total }} items.
        </ng-template>
    `
})
export class EfoItemCountComponent {
    @Input() page!: number;

    @Input() total!: number;

    @Input() itemsPerPage!: number;

    i18nEnabled: boolean;

    constructor(config: EfoConfigService) {
        this.i18nEnabled = config.CONFIG_OPTIONS.i18nEnabled || false;
    }

    i18nValues(): Object {
        const first = (this.page - 1) * this.itemsPerPage === 0 ? 1 : (this.page - 1) * this.itemsPerPage + 1;
        const second = this.page * this.itemsPerPage < this.total ? this.page * this.itemsPerPage : this.total;

        return {
            first,
            second,
            total: this.total
        };
    }
}
