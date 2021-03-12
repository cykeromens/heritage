import {Injectable} from '@angular/core';
import {Observable, Observer, Subscription} from 'rxjs';
import {filter, map, share} from 'rxjs/operators';
import {EfoEventWithContent} from './event-with-content.model';

@Injectable({
    providedIn: 'root'
})
export class EfoEventManager {
    observable: Observable<EfoEventWithContent<any> | string>;
    observer!: Observer<EfoEventWithContent<any> | string>;

    constructor() {
        this.observable = Observable.create((observer: Observer<EfoEventWithContent<any> | string>) => {
            this.observer = observer;
        }).pipe(share());
    }

    broadcast(event: EfoEventWithContent<any> | string): void {
        if (this.observer) {
            this.observer.next(event);
        }
    }

    subscribe(eventName: string, callback: any): Subscription {
        const subscriber: Subscription = this.observable
            .pipe(
                filter((event: EfoEventWithContent<any> | string) => {
                    if (typeof event === 'string') {
                        return event === eventName;
                    }
                    return event.name === eventName;
                }),
                map((event: EfoEventWithContent<any> | string) => {
                    if (typeof event !== 'string') {
                        return event;
                    }
                    return null;
                })
            )
            .subscribe(callback);
        return subscriber;
    }

    destroy(subscriber: Subscription): void {
        subscriber.unsubscribe();
    }
}
