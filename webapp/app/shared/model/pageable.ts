import {PageableModel} from "../../openapi";

export class Pageable implements PageableModel {

    page?: number;
    size?: number;
    sort?: string [];

    constructor(page?: number, size?: number, sort?: string[]) {
        this.page = page;
        this.size = size;
        this.sort = sort;
    }
}
