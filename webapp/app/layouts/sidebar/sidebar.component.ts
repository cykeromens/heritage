import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/banks', title: 'Bank', icon: 'account_balance', class: ''},
    {path: '/system-param', title: 'System Parameter', icon: 'settings_system_daydream', class: ''},
    {path: '/rejection-reason', title: 'Rejection Reason', icon: 'library_books', class: ''},
    {path: '/cbs-rejection-reason', title: 'CBS Rejection Reason', icon: 'chrome_reader_mode', class: ''},
    {path: '/transfer-purpose', title: 'Transfer Purpose', icon: 'swap_horiz', class: ''},
    {path: '/branch', title: 'Branch', icon: 'dock', class: ''},
    {path: '/currency', title: 'Currency', icon: 'euro_symbol', class: ''},
    {path: '/verification-item', title: 'Verification Item', icon: 'verified_user', class: ''},
    {path: '/account-type', title: 'Account Type', icon: 'content_paste', class: ''},
    {path: '/corporate', title: 'Corporate', icon: 'content_paste', class: ''},
    {path: '/system-user', title: 'System User', icon: 'people', class: ''},
    {path: '/corporate-token', title: 'Corporate Token', icon: 'people', class: ''},
    {path: '/internal-transfer', title: 'Internal Transfer', icon: 'forward', class: ''}

];

@Component({
    selector: 'efo-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    menuItems: any[] | undefined;

    constructor() {
    }

    ngOnInit(): void {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu(): boolean {
        // if ($(window).width() > 991) {
        //     return false;
        // }
        return true;
    };
}
