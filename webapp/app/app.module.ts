import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import './vendor';
import {EformsSharedModule} from 'app/shared/shared.module';
import {EformsCoreModule} from 'app/core/core.module';
import {EformsAppRoutingModule} from './app-routing.module';
import {EformsHomeModule} from './home/home.module';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {SidebarComponent} from 'app/layouts/sidebar/sidebar.component';
import {ActiveMenuDirective} from './layouts/navbar/active-menu.directive';
import {ErrorComponent} from './layouts/error/error.component';
import {EformsEntityModule} from 'app/entities/entity.module';
import {ApiModule} from 'app/openapi';

@NgModule({
    imports: [
        BrowserModule,
        EformsSharedModule,
        EformsCoreModule,
        EformsHomeModule,
        EformsEntityModule,
        EformsAppRoutingModule,
        ApiModule
    ],
    declarations: [MainComponent, NavbarComponent, ErrorComponent, ActiveMenuDirective, SidebarComponent, FooterComponent],
    bootstrap: [MainComponent]
})
export class EformsAppModule {
}
