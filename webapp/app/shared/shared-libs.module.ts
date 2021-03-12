import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {EfoCommonModule} from 'app/core/custom/efo-common.module';
import {ArchwizardModule} from 'angular-archwizard';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    exports: [
        FormsModule,
        CommonModule,
        NgbModule,
        EfoCommonModule,
        InfiniteScrollModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatStepperModule,

        ArchwizardModule
    ]
})
export class EformsSharedLibsModule {
}
