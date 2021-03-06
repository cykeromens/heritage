import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {EfoPaginationUtil} from './pagination-util.service';

@Injectable({
    providedIn: 'root'
})
export class EfoResolvePagingParams implements Resolve<any> {
    constructor(private paginationUtil: EfoPaginationUtil) {
    }

    resolve(route: ActivatedRouteSnapshot, state?: RouterStateSnapshot): any {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const defaultSort = route.data['defaultSort'] ? route.data['defaultSort'] : 'uuid,asc';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : defaultSort;
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
        };
    }
}
