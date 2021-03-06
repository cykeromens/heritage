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
import {School} from './school';
import {BioData} from './bio-data';
import {Course} from './course';
import {Subject} from './subject';


export interface StudentRegistrationRequest {
    username?: string;
    password?: string;
    email?: string;
    phone?: string;
    bioData: BioData;
    schoolsAttended: Array<School>;
    jambSubjects: Array<Subject>;
    intendingCourses?: Array<Course>;
}

