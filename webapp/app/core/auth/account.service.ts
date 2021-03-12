import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AccountService {
    private userIdentity: Account | null = null;

    constructor() {
    }

    isAuthenticated(): boolean {
        return this.userIdentity !== null;
    }

}
