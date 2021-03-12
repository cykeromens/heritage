import {LOCALE_ID, NgModule} from '@angular/core';
import {DatePipe, registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {CookieModule} from 'ngx-cookie';
import {NgxWebstorageModule} from 'ngx-webstorage';
import locale from '@angular/common/locales/en';

import * as moment from 'moment';
import {NgbDateAdapter, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateMomentAdapter} from 'app/shared/util/datepicker-adapter';

import {NotificationInterceptor} from 'app/blocks/interceptor/notification.interceptor';

import {fontAwesomeIcons} from './icons/font-awesome-icons';
import {EfoCommonModule} from 'app/core/custom';
import {faSort, faSortDown, faSortUp} from '@fortawesome/free-solid-svg-icons';
import {ErrorHandlerInterceptor} from 'app/blocks/interceptor/errorhandler.interceptor';
import {ApiModule, Configuration} from 'app/openapi';

@NgModule({
    imports: [
        HttpClientModule,
        CookieModule.forRoot(),
        NgxWebstorageModule.forRoot({prefix: 'efo', separator: '-'}),
        EfoCommonModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            alertTimeout: 5000,
            sortIcon: faSort,
            sortAscIcon: faSortUp,
            sortDescIcon: faSortDown
        }),
        ApiModule.forRoot(() => {
            const conf = new Configuration();
            conf.basePath = location.origin;
            return conf;
        })
    ],
    providers: [
        Title,
        {
            provide: LOCALE_ID,
            useValue: 'en'
        },
        {provide: NgbDateAdapter, useClass: NgbDateMomentAdapter},
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorHandlerInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NotificationInterceptor,
            multi: true
        }
    ],
})
export class EformsCoreModule {
    constructor(iconLibrary: FaIconLibrary, dpConfig: NgbDatepickerConfig) {
        registerLocaleData(locale);
        iconLibrary.addIcons(...fontAwesomeIcons);
        dpConfig.minDate = {year: moment().year() - 100, month: 1, day: 1};
    }
}
