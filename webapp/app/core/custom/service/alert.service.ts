import {Injectable, Optional, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {TranslateService} from '@ngx-translate/core';

import {EfoConfigService} from 'app/core/custom';

export type EfoAlertType = 'success' | 'danger' | 'warning' | 'info';

export interface EfoAlert {
    id?: number;
    type: EfoAlertType;
    msg: string;
    params?: any;
    timeout?: number;
    toast?: boolean;
    position?: string;
    scoped?: boolean;
    close?: (alerts: EfoAlert[]) => void;
}

@Injectable({
    providedIn: 'root'
})
export class EfoAlertService {
    private alertId: number;
    private alerts: EfoAlert[];
    private timeout: number;
    private toast: boolean;
    private i18nEnabled: boolean;

    constructor(
        private sanitizer: DomSanitizer,
        private configService: EfoConfigService,
        @Optional() private translateService: TranslateService
    ) {
        const config = this.configService.getConfig();
        this.toast = false;
        this.i18nEnabled = false;
        this.alertId = 0; // unique id for each alert. Starts from 0.
        this.alerts = [];
        this.timeout = config.alertTimeout || 5000;
    }

    clear(): void {
        this.alerts.splice(0, this.alerts.length);
    }

    get(): EfoAlert[] {
        return this.alerts;
    }

    success(msg: string, params?: any, position?: string): EfoAlert {
        return this.addAlert(
            {
                type: 'success',
                msg,
                params,
                timeout: this.timeout,
                toast: this.isToast(),
                position
            },
            []
        );
    }

    error(msg: string, params?: any, position?: string): EfoAlert {
        return this.addAlert(
            {
                type: 'danger',
                msg,
                params,
                timeout: this.timeout,
                toast: this.isToast(),
                position
            },
            []
        );
    }

    warning(msg: string, params?: any, position?: string): EfoAlert {
        return this.addAlert(
            {
                type: 'warning',
                msg,
                params,
                timeout: this.timeout,
                toast: this.isToast(),
                position
            },
            []
        );
    }

    info(msg: string, params?: any, position?: string): EfoAlert {
        return this.addAlert(
            {
                type: 'info',
                msg,
                params,
                timeout: this.timeout,
                toast: this.isToast(),
                position
            },
            []
        );
    }

    addAlert(alertOptions: EfoAlert, extAlerts: EfoAlert[]): EfoAlert {
        alertOptions.id = this.alertId++;
        if (this.i18nEnabled && alertOptions.msg) {
            alertOptions.msg = this.translateService.instant(alertOptions.msg, alertOptions.params);
        }
        const alert = this.factory(alertOptions);
        if (alertOptions.timeout && alertOptions.timeout > 0) {
            setTimeout(() => {
                this.closeAlert(Number(alertOptions.id), extAlerts);
            }, alertOptions.timeout);
        }
        return alert;
    }

    closeAlert(id: number, extAlerts?: EfoAlert[]): EfoAlert[] {
        const thisAlerts: EfoAlert[] = extAlerts && extAlerts.length > 0 ? extAlerts : this.alerts;
        return this.closeAlertByIndex(thisAlerts.map(e => e.id).indexOf(id), thisAlerts);
    }

    closeAlertByIndex(index: number, thisAlerts: EfoAlert[]): EfoAlert[] {
        return thisAlerts.splice(index, 1);
    }

    isToast(): boolean {
        return this.toast;
    }

    private factory(alertOptions: EfoAlert): EfoAlert {
        const alert: EfoAlert = {
            type: alertOptions.type,
            msg: String(this.sanitizer.sanitize(SecurityContext.HTML, alertOptions.msg)),
            id: alertOptions.id,
            timeout: alertOptions.timeout,
            toast: alertOptions.toast,
            position: alertOptions.position ? alertOptions.position : 'top right',
            scoped: alertOptions.scoped,
            close: (alerts: EfoAlert[]) => {
                return this.closeAlert(Number(alertOptions.id), alerts);
            }
        };
        if (!alert.scoped) {
            this.alerts.push(alert);
        }
        return alert;
    }
}
