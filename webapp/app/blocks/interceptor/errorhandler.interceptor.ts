import {Injectable} from '@angular/core';
import {EfoEventManager, EfoEventWithContent} from 'app/core/custom/service';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private eventManager: EfoEventManager) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(null, (err: HttpErrorResponse) => {
                if (!(err.status === 401 && (err.message === '' || (err.url)))) {
                    this.eventManager.broadcast(new EfoEventWithContent('eformsApp.httpError', err));
                }
            })
        );
    }
}
