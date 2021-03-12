import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, NavigationEnd, NavigationError, Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

import {AccountService} from 'app/core/auth/account.service';

@Component({
    selector: 'efo-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.scss']
})
export class NavbarComponent implements OnInit {
    location: Location;
    mobileMenuVisible!: number;

    private toggleButton: any;
    private sidebarVisible: boolean;
    pageTitle!: string;

    constructor(
        private sessionStorage: SessionStorageService,
        private accountService: AccountService,
        private router: Router,
        private element: ElementRef,
    ) {
        this.location = location;
        this.sidebarVisible = false;
    }

    ngOnInit(): void {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.updateTitle();
            }
            if (event instanceof NavigationError && event.error.status === 404) {
                this.router.navigate(['/404']);
            }
        });

        this.updateTitle();

        this.router.events.subscribe(() => {
            this.sidebarClose();
            const $layer: any = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobileMenuVisible = 0;
            }
        });
    }

    isAuthenticated(): boolean {
        return this.accountService.isAuthenticated();
    }

    sidebarOpen(): void {
        const toggleButton = this.toggleButton;
        setTimeout(() => {
            toggleButton.classList.add('toggled');
        }, 500);
    }

    sidebarClose(): void {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };

    sidebarToggle(): void {
        const $toggle = document.getElementsByClassName('navbar-toggler')[0];

        if (!this.sidebarVisible) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];

        if (this.mobileMenuVisible === 1) {
            body.classList.remove('nav-open');
            setTimeout(() => {
                $toggle.classList.remove('toggled');
            }, 400);

            this.mobileMenuVisible = 0;
        } else {
            setTimeout(() => {
                $toggle.classList.add('toggled');
            }, 430);

            const $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');


            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            } else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }

            setTimeout(() => {
                $layer.classList.add('visible');
            }, 100);

            $layer.onclick = function (): void {
                body.classList.remove('nav-open');
                $layer.classList.remove('visible');
                setTimeout(() => {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);

            body.classList.add('nav-open');
            this.mobileMenuVisible = 1;

        }
    }

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot): string {
        let title: string = routeSnapshot.data && routeSnapshot.data['pageTitle'] ? routeSnapshot.data['pageTitle'] : '';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }

    private updateTitle(): void {
        this.pageTitle = this.getPageTitle(this.router.routerState.snapshot.root);
        if (!this.pageTitle) {
            this.pageTitle = 'global.title';
        }
    }

}
