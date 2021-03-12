import {GridOptions} from "ag-grid-community";
import {GridCommonConfiguration} from "app/shared/grid/grid.common.configuration";


export abstract class GridBaseComponent {
    public rowData!: any;
    public gridOptions: Partial<GridOptions>;
    public defaultColDef: any;
    public gridApi?: any;
    public gridColumnApi?: any;
    public loadingTemplate?: string;
    public noRowsTemplate?: string;
    private rowsToFetch: number;

    protected constructor(protected service: any) {
        this.rowsToFetch = 1000000;
        this.service = service;
        this.gridOptions = GridCommonConfiguration.getGridOptions();
        this.gridOptions.columnDefs = this.getColumnDef();
        this.defaultColDef = GridCommonConfiguration.defaultColumnOptions();
        this.loadingTemplate = `<span class="ag-overlay-loading-center">Loading...</span>`;
        this.noRowsTemplate = `<span class="ag-overlay-loading-center">No data found</span>`;
    }

    public onGridReady($event: any): void {
        this.gridApi = $event.api;
        this.gridColumnApi = $event.gridColumnApi;
        this.service.query({page: 0, size: this.rowsToFetch}).subscribe((res: any) => {
            this.rowData = res.content || [];
        });
    }

    protected abstract getColumnDef(): any;
}

