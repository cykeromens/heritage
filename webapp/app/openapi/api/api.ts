export * from './default.service';
import {DefaultService} from './default.service';

export * from './student-registration.service';
import {StudentRegistrationService} from './student-registration.service';

export * from './subject.service';
import {SubjectService} from './subject.service';

export const APIS = [DefaultService, StudentRegistrationService, SubjectService];
