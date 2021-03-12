import {BioData, Course, School, StudentRegistrationRequest, Subject} from "../../openapi";

export class StudentRegistrationModel implements StudentRegistrationRequest {
    bioData: BioData;
    email: string;
    intendingCourses: Array<Course>;
    jambSubjects: Array<Subject>;
    password: string;
    phone: string;
    schoolsAttended: Array<School>;
    username: string;

    uuid: string;
    code!: string;
    name!: string;
    shortName!: string;
    enable!: boolean;
    status?: string;
    availableActions!: Array<WorkflowActionResponse>;

    constructor() {
        this.uuid = ''
    }
}

