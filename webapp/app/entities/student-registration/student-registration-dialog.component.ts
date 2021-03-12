import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {EfoEventManager} from "../../core/custom/service";
import {StudentRegistrationRequest, StudentRegistrationService} from "../../openapi";

@Component({
    selector: 'efo-bank-verify-dialog',
    templateUrl: './student-registration-dialog.component.html'
})
export class StudentRegistrationDialogComponent {

    uuid: string;
    action: string;

    constructor(
        private service: StudentRegistrationService,
        public activeModal: NgbActiveModal,
        private eventManager: EfoEventManager,
    ) {
        this.action = '';
        this.uuid = '';
    }

    cancel(): void {
        this.activeModal.dismiss();
    }

    confirm(uuid: string, action: string): void {
        this.service.verifyAction(uuid, action)
            .subscribe(() => {
                this.eventManager.broadcast('bankListModification');
                window.history.back();
                this.activeModal.close();
            })
    }

}
