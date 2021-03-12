import {AfterViewInit, Component, Input} from '@angular/core';
import {TransferType, UserType, WorkflowStatus} from 'app/openapi';
import {ListingComponent} from 'app/entities/listing.component';

@Component({
    selector: 'efo-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements AfterViewInit {
    userTypes: string[] = [];
    transferTypes: string[] = [];

    statuses: WorkflowStatus [];
    filter: any;

    @Input() currentSearch!: boolean;
    @Input() name!: boolean;
    @Input() contactName!: boolean;
    @Input() isoCode!: boolean;
    @Input() description!: boolean;
    @Input() desc!: boolean;
    @Input() code!: boolean;
    @Input() email!: boolean;
    @Input() mobile!: boolean;
    @Input() shortName!: boolean;
    @Input() type!: boolean;
    @Input() enable!: boolean;
    @Input() enabled!: boolean;
    @Input() status!: boolean;
    @Input() successEmailBody!: boolean;
    @Input() rejectEmailBody!: boolean;
    @Input() sigUrl!: boolean;
    @Input() replyTimeout!: boolean;
    @Input() nbkAccountLength!: boolean;
    @Input() maxRetries!: boolean;
    @Input() duplicateDays!: boolean;
    @Input() branchIndex!: boolean;
    @Input() englishDesc!: boolean;
    @Input() arabicDesc!: boolean;
    @Input() userId!: boolean;
    @Input() transferType!: boolean;
    @Input() userType!: boolean;
    @Input() isRequired!: boolean;

    @Input() entity!: ListingComponent;

    constructor() {
        this.statuses = Object.values(WorkflowStatus).map(key => (key));
        this.userTypes = Object.values(UserType).map(key => (key));
        this.transferTypes = Object.values(TransferType).map(key => (key));
        this.status = true;
    }

    search(): void {
        this.entity.loadPage(1);
    }

    ngAfterViewInit(): void {
        this.filter = this.entity.filter;
    }
}
