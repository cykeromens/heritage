import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, NavigationEnd, NavigationError, Router} from '@angular/router';

import {AccountService} from 'app/core/auth/account.service';

@Component({
    selector: 'efo-main',
    templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {
    isHomePage: boolean | false | undefined;

    constructor(private accountService: AccountService, private titleService: Title, private router: Router) {
    }

    ngOnInit(): void {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateTitle();
            }
            if (event instanceof NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    private updateTitle(): void {
        let pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
        if (!pageTitle) {
            pageTitle = 'Eforms';
        }
        this.titleService.setTitle(pageTitle);
        this.whichPage(pageTitle);
    }

    whichPage(title: string): void {
        this.isHomePage = title !== 'Welcome to EForms!';
    }
}
