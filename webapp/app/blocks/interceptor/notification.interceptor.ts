import {EfoAlertService} from 'app/core/custom/service';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {
    constructor(private alertService: EfoAlertService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    let alert: string | null = null;
                    event.headers.keys().forEach(entry => {
                        if (entry.toLowerCase().endsWith('app-alert')) {
                            alert = event.headers.get(entry);
                        }
                    });

                    if (alert) {
                        this.alertService.success(alert);
                    }
                }
            })
        );
    }
}
