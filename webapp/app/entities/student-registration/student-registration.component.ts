import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ListingComponent} from "../listing.component";
import {StudentRegistrationResponse, StudentRegistrationService} from "../../openapi";
import {EfoEventManager} from "../../core/custom/service";
import {CODE, ENABLE, NAME, SHORT_NAME, STATUS} from "../../shared/constants/field.constants";

@Component({
    selector: 'efo-bank',
    templateUrl: './student-registration.component.html'
})
export class StudentRegistrationComponent extends ListingComponent {

    data!: Array<StudentRegistrationResponse>;

    constructor(
        protected service: StudentRegistrationService,
        protected activatedRoute: ActivatedRoute,
        protected router: Router,
        protected eventManager: EfoEventManager,
    ) {
        super(service, activatedRoute, router, eventManager);
        this.filter = {};
    }

    protected queryFilter(queryParams: any): void {
        this.filter.status = queryParams[STATUS] ? queryParams[STATUS] : null;
        this.filter.enable = queryParams[ENABLE] ? queryParams[ENABLE] : null;
        this.filter.code = queryParams[CODE] ? queryParams[CODE] : null;
        this.filter.shortName = queryParams[SHORT_NAME] ? queryParams[SHORT_NAME] : null;
        this.filter.name = queryParams[NAME] ? queryParams[NAME] : null;
    }

    protected navigateListPage(): any {
        this.router.navigate(['/banks'], {
            queryParams: {
                status: this.filter.status,
                enable: this.filter.enable,
                code: this.filter.code,
                name: this.filter.name,
                shortName: this.filter.shortName,
                page: this.page,
                size: this.itemsPerPage,
                sort: this.predicate + ',' + (this.ascending ? 'asc' : 'desc')
            }
        });
    }

    protected registerChangeEvent(): void {
        this.eventSubscriber = this.eventManager
            .subscribe('bankListModification',
                () => this.loadPage());
    }
}
