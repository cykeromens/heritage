import {Injectable} from '@angular/core';
import {HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {
    StudentRegistrationRequest,
    StudentRegistrationResponse,
    StudentRegistrationService
} from "../../openapi";

type EntityArrayResponseType = HttpResponse<StudentRegistrationResponse>;

@Injectable({
    providedIn: 'root'
})
export class StudentRegService {

    constructor(private api: StudentRegistrationService) {

    }

    create(registrationRequest: StudentRegistrationRequest): Observable<StudentRegistrationResponse> {
        return this.api.studentRegistrationRequest(registrationRequest)
    }

    update(uuid: string, registrationRequest: StudentRegistrationRequest): Observable<StudentRegistrationResponse> {
        return this.api.editStudentRegistration(uuid, registrationRequest)
    }

    find(uuid: string): Observable<StudentRegistrationResponse> {
        return this.api.getStudentRegistrationByUuid(uuid);
    }

    // query(req?: any, filter?: StudentRegistrationFilterRequest): Observable<EntityArrayResponseType> {
    //   return this.api.(filter, createRquestPageable(req), 'response');
    // }

    verify(uuid: string, action: string): Observable<StudentRegistrationResponse> {
        return this.api.verifyAction(uuid, action);
    }

}

