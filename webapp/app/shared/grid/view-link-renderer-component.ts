import {Component} from '@angular/core';
import {AgRendererComponent} from 'ag-grid-angular';

@Component({
    selector: 'efo-view-link-renderer',
    template: `<button type="submit" class="btn btn-info btn-sm" [routerLink]="[params.inRouterLink, params.value, 'view']">
    <fa-icon icon="eye"></fa-icon> <span class="d-none d-md-inline">View</span></button>`
})
export class ViewLinkRendererComponent implements AgRendererComponent {

    params: any;

    agInit(params: any): void {
        this.params = params;
    }

    refresh(params: any): boolean {
        return false;
    }

}
