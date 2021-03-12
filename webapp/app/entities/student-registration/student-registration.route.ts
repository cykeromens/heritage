import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, Routes} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';

import {StudentRegistrationComponent} from './student-registration.component';
import {StudentRegistrationUpdateComponent} from './student-registration-update.component';
import {flatMap} from 'rxjs/operators';
import {StudentRegistrationRequest, StudentRegistrationResponse, StudentRegistrationService} from "../../openapi";
import {StudentRegistrationDetailComponent} from "./student-registration-detail.component";
import {EfoResolvePagingParams} from "../../core/custom/service";

@Injectable({providedIn: 'root'})
export class StudentRegistrationRouteResolver implements Resolve<StudentRegistrationResponse> {
    constructor(private service: StudentRegistrationService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<StudentRegistrationResponse> | Observable<never> {
        const id = route.params['id'];
        if (id) {
            return this.service.getStudentRegistrationByUuid(id).pipe(
                flatMap((registrationResponse: StudentRegistrationResponse) => {
                    if (registrationResponse) {
                        return of(registrationResponse);
                    } else {
                        this.router.navigate(['404']);
                        return EMPTY;
                    }
                })
            );
        }
        return of({});
    }
}

export const studentRegistrationRoutes: Routes = [
    {
        path: '',
        component: StudentRegistrationComponent,
        resolve: {
            pagingParams: EfoResolvePagingParams
        },
        data: {
            defaultSort: 'uuid,asc',
            pageTitle: 'Student Registration'
        },
    },
    {
        path: 'new',
        component: StudentRegistrationUpdateComponent,
        resolve: {
            bank: StudentRegistrationRouteResolver
        },
        data: {
            pageTitle: 'Student Registration'
        },
    },
    {
        path: ':id/view',
        component: StudentRegistrationDetailComponent,
        resolve: {
            bank: StudentRegistrationRouteResolver
        },
        data: {
            pageTitle: 'Student Registration'
        }
    },
    {
        path: ':id/edit',
        component: StudentRegistrationUpdateComponent,
        resolve: {
            bank: StudentRegistrationRouteResolver
        },
        data: {
            pageTitle: 'Student Registration'
        }
    }
];
