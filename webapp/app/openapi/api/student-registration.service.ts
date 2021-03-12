/**
 * Heritage service API
 * Heritage service API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import {Inject, Injectable, Optional} from '@angular/core';
import {
    HttpClient, HttpHeaders, HttpParams,
    HttpResponse, HttpEvent, HttpParameterCodec
} from '@angular/common/http';
import {CustomHttpParameterCodec} from '../encoder';
import {Observable} from 'rxjs';

import {StudentRegistrationRequest} from '../model/models';
import {StudentRegistrationResponse} from '../model/models';

import {BASE_PATH, COLLECTION_FORMATS} from '../variables';
import {Configuration} from '../configuration';


@Injectable({
    providedIn: 'root'
})
export class StudentRegistrationService {

    protected basePath = 'http://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object") {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key,
                        (value as Date).toISOString().substr(0, 10));
                } else {
                    throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Repair Subject
     * @param uuid Subject UUID
     * @param studentRegistrationRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editStudentRegistration(uuid: string, studentRegistrationRequest?: StudentRegistrationRequest, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<StudentRegistrationResponse>;
    public editStudentRegistration(uuid: string, studentRegistrationRequest?: StudentRegistrationRequest, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<StudentRegistrationResponse>>;
    public editStudentRegistration(uuid: string, studentRegistrationRequest?: StudentRegistrationRequest, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<StudentRegistrationResponse>>;
    public editStudentRegistration(uuid: string, studentRegistrationRequest?: StudentRegistrationRequest, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling editStudentRegistration.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.put<StudentRegistrationResponse>(`${this.configuration.basePath}/student-registrations/${encodeURIComponent(String(uuid))}`,
            studentRegistrationRequest,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get Subject by UUID
     * @param uuid Subject UUID
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getStudentRegistrationByUuid(uuid: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<StudentRegistrationResponse>;
    public getStudentRegistrationByUuid(uuid: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<StudentRegistrationResponse>>;
    public getStudentRegistrationByUuid(uuid: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<StudentRegistrationResponse>>;
    public getStudentRegistrationByUuid(uuid: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling getStudentRegistrationByUuid.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.get<StudentRegistrationResponse>(`${this.configuration.basePath}/student-registrations/${encodeURIComponent(String(uuid))}`,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * student registration request
     * @param studentRegistrationRequest
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public studentRegistrationRequest(studentRegistrationRequest: StudentRegistrationRequest, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<StudentRegistrationResponse>;
    public studentRegistrationRequest(studentRegistrationRequest: StudentRegistrationRequest, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<StudentRegistrationResponse>>;
    public studentRegistrationRequest(studentRegistrationRequest: StudentRegistrationRequest, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<StudentRegistrationResponse>>;
    public studentRegistrationRequest(studentRegistrationRequest: StudentRegistrationRequest, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
        if (studentRegistrationRequest === null || studentRegistrationRequest === undefined) {
            throw new Error('Required parameter studentRegistrationRequest was null or undefined when calling studentRegistrationRequest.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        let responseType: 'text' | 'json' = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<StudentRegistrationResponse>(`${this.configuration.basePath}/v1/student-registrations`,
            studentRegistrationRequest,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Verify Subject action
     * @param uuid
     * @param action
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public verifyAction(uuid: string, action: string, observe?: 'body', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<StudentRegistrationResponse>;
    public verifyAction(uuid: string, action: string, observe?: 'response', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpResponse<StudentRegistrationResponse>>;
    public verifyAction(uuid: string, action: string, observe?: 'events', reportProgress?: boolean, options?: { httpHeaderAccept?: 'application/json' }): Observable<HttpEvent<StudentRegistrationResponse>>;
    public verifyAction(uuid: string, action: string, observe: any = 'body', reportProgress: boolean = false, options?: { httpHeaderAccept?: 'application/json' }): Observable<any> {
        if (uuid === null || uuid === undefined) {
            throw new Error('Required parameter uuid was null or undefined when calling verifyAction.');
        }
        if (action === null || action === undefined) {
            throw new Error('Required parameter action was null or undefined when calling verifyAction.');
        }

        let headers = this.defaultHeaders;

        let httpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (httpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (httpHeaderAcceptSelected !== undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }


        let responseType: 'text' | 'json' = 'json';
        if (httpHeaderAcceptSelected && httpHeaderAcceptSelected.startsWith('text')) {
            responseType = 'text';
        }

        return this.httpClient.post<StudentRegistrationResponse>(`${this.configuration.basePath}/student-registrations/${encodeURIComponent(String(uuid))}/${encodeURIComponent(String(action))}`,
            null,
            {
                responseType: <any>responseType,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}