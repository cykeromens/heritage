import {Component, OnDestroy, OnInit} from '@angular/core';
import {EfoAlert, EfoAlertService} from 'app/core/custom/service';

@Component({
    selector: 'efo-alert',
    template: `
    <div class="alerts" role="alert">
      <div *ngFor="let alert of alerts" [ngClass]="setClasses(alert)">
        <ngb-alert *ngIf="alert && alert.type && alert.msg" [type]="alert.type" (close)="alert.close(alerts)">
          <pre [innerHTML]="alert.msg"></pre>
        </ngb-alert>
      </div>
    </div>
  `
})
export class AlertComponent implements OnInit, OnDestroy {
    alerts: EfoAlert[] = [];

    constructor(private alertService: EfoAlertService) {
    }

    ngOnInit(): void {
        this.alerts = this.alertService.get();
    }

    setClasses(alert: EfoAlert): { [key: string]: boolean } {
        const classes = {'efo-toast': Boolean(alert.toast)};
        if (alert.position) {
            return {...classes, [alert.position]: true};
        }
        return classes;
    }

    ngOnDestroy(): void {
        this.alertService.clear();
    }
}
