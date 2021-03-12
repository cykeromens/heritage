import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpResponse} from '@angular/common/http';
import {OnDestroy, OnInit} from '@angular/core';
import {ITEMS_PER_PAGE} from "../shared/constants/pagination.constants";
import {EfoEventManager} from "../core/custom/service";

export abstract class ListingComponent implements OnInit, OnDestroy {

    protected eventSubscriber?: Subscription;

    data?: any[];
    totalItems = 0;
    itemsPerPage = ITEMS_PER_PAGE;
    page!: number;
    predicate!: string;
    ascending!: boolean;
    ngbPaginationPage = 1;
    statuses: WorkflowStatus [];
    filter: any;
    currentSearch: boolean;

    protected constructor(
        protected service: any,
        protected activatedRoute: ActivatedRoute,
        protected router: Router,
        protected eventManager: EfoEventManager,
    ) {
        this.filter = {};
        this.currentSearch = false;
        this.statuses = Object.values(WorkflowStatus).map(key => (key));
    }

    loadPage(page?: number): void {
        const pageToLoad: number = page || this.page;

        Object.entries(this.filter).forEach(f => f[1] === null ? delete this.filter[f[0]] : 0);
        if (Object.keys(this.filter).length > 0) {
            this.currentSearch = true;
            this.service.query({
                page: pageToLoad - 1,
                size: this.itemsPerPage,
                sort: this.sort()
            }, this.filter)
                .subscribe((res: HttpResponse<any>) => this.onSuccess(res.body, pageToLoad), () => this.onError());
            return;
        }

        this.service.query({
            page: pageToLoad - 1,
            size: this.itemsPerPage,
            sort: this.sort()
        }, {}).subscribe(
            (res: HttpResponse<any>) => this.onSuccess(res.body, pageToLoad),
            () => this.onError()
        );
        this.currentSearch = false;
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(data => {
            this.page = data.pagingParams.page;
            this.ascending = data.pagingParams.ascending;
            this.predicate = data.pagingParams.predicate;
            this.ngbPaginationPage = data.pagingParams.page;
            this.loadFilter();
            this.loadPage();
        });
        this.registerChangeEvent();
    }

    ngOnDestroy(): void {
        if (this.eventSubscriber) {
            this.eventManager.destroy(this.eventSubscriber);
        }
    }

    sort(): string[] {
        const result = [this.predicate + ',' + (this.ascending ? 'asc' : 'desc')];
        if (this.predicate !== 'uuid') {
            result.push('uuid');
        }
        return result;
    }

    openSearchFilter(): void {
        this.currentSearch = true;
    }

    clearSearch(): void {
        this.currentSearch = false;
        this.filter = {};
        this.loadPage(1);
    }

    search(): void {
        this.loadPage(1);
    }

    protected loadFilter(): void {
        const snapshot = this.activatedRoute.snapshot;
        if (snapshot) {
            this.queryFilter(snapshot.queryParams);
        }
    }

    protected onSuccess(data: any | null, page: number): void {
        const pageInfo: any = data?.pageInfo;
        if ('totalElements' in pageInfo) {
            this.totalItems = Number(pageInfo.totalElements);
        }
        this.page = page;
        this.ngbPaginationPage = this.page;
        this.navigateListPage();
        this.data = data?.content || [];
    }

    protected onError(): void {
        this.ngbPaginationPage = this.page;
    }

    protected abstract queryFilter(queryParams: any): void;

    protected abstract registerChangeEvent(): void;

    protected abstract navigateListPage(): any;
}
