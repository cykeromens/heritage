import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {WorkflowActionResponse} from 'app/openapi';
import {BankModel} from 'app/shared/model/student-registration.model';
import {BankVerifyDialogComponent} from 'app/entities/bank/bank-verify-dialog.component';
import {StudentRegistrationResponse} from "../../openapi";

@Component({
    selector: 'efo-bank-detail',
    templateUrl: './student-registration-detail.component.html'
})
export class StudentRegistrationDetailComponent implements OnInit {
    bankModel: StudentRegistrationResponse | null = null;

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected router: Router,
        private modalService: NgbModal
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({bank}) => this.bankModel = bank)
    }

    previousState(): void {
        window.history.back();
    }

    repair(bankModel: BankModel): void {
        const modalRef = this.modalService.open(BankVerifyDialogComponent, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.bankModel = bankModel;
        modalRef.componentInstance.action = 'REPAIR';
    }

    approve(bankModel: BankModel): void {
        const modalRef = this.modalService.open(BankVerifyDialogComponent, {size: 'lg', backdrop: 'static'});
        modalRef.componentInstance.bankModel = bankModel;
        modalRef.componentInstance.action = 'APPROVE';
    }

    edit(bankModel: BankModel): void {
        this.router.navigate(['banks', bankModel.uuid, 'edit'])
    }

    available(availableActions: Array<WorkflowActionResponse>, actionStr: string): boolean {
        return availableActions.some(r => r.action === actionStr);
    }
}
