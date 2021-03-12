import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {StudentRegistrationComponent} from './student-registration.component';
import {StudentRegistrationUpdateComponent} from './student-registration-update.component';
import {StudentRegistrationDetailComponent} from './student-registration-detail.component';
import {StudentRegistrationDialogComponent} from './student-registration-dialog.component';
import {studentRegistrationRoutes} from "./student-registration.route";
import {EformsSharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [EformsSharedModule, RouterModule.forChild(studentRegistrationRoutes)],
    declarations: [StudentRegistrationComponent, StudentRegistrationUpdateComponent, StudentRegistrationDetailComponent, StudentRegistrationDialogComponent],
})
export class EFormBankModule {
}
