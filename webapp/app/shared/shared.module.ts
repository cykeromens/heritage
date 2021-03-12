import {NgModule} from '@angular/core';
import {EformsSharedLibsModule} from './shared-libs.module';
import {AlertComponent} from './alert/alert.component';
import {AlertErrorComponent} from './alert/alert-error.component';
import {SearchComponent} from 'app/shared/search/search.component';

@NgModule({
    imports: [EformsSharedLibsModule],
    declarations: [AlertComponent, AlertErrorComponent, SearchComponent],
    entryComponents: [],
    exports: [EformsSharedLibsModule, AlertComponent, AlertErrorComponent, SearchComponent]
})
export class EformsSharedModule {
}
