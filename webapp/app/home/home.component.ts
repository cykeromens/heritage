import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {AccountService} from 'app/core/auth/account.service';

@Component({
    selector: 'efo-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    authSubscription?: Subscription;

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
    }

    isAuthenticated(): boolean {
        return this.accountService.isAuthenticated();
    }

    login(): void {
    }

    ngOnDestroy(): void {
        if (this.authSubscription) {
            this.authSubscription.unsubscribe();
        }
    }
}
