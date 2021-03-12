import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BankResponse} from 'app/openapi';
import {Observable} from 'rxjs';
import {BankService} from 'app/entities/bank/bank.service';
import {BankModel} from 'app/shared/model/student-registration.model';

@Component({
    selector: 'efo-bank-update',
    templateUrl: './student-registration-update.component.html'
})
export class StudentRegistrationUpdateComponent implements OnInit {
    isSaving = false;

    editForm = this.fb.group({
        code: [null, [Validators.required]],
        name: [null, [Validators.required]],
        shortName: [null, [Validators.required]],
        uuid: [null],
        enable: [],
        status: [null]
    });

    constructor(protected service: BankService, protected activatedRoute: ActivatedRoute, private fb: FormBuilder,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(({bank}) => {
            this.updateForm(bank);
        });
    }

    updateForm(response: BankResponse): void {
        this.editForm.patchValue({
            code: response.code,
            name: response.name,
            shortName: response.shortName,
            uuid: response.uuid,
            enable: response.enable || false,
            status: response.status
        });
    }

    previousState(): void {
        this.router.navigate(['banks']);
    }

    save(): void {
        this.isSaving = true;
        const bankModel = this.createFromForm();
        if (bankModel.uuid) {
            this.subscribeToSaveResponse(this.service.update(bankModel.uuid, bankModel));
        } else {
            this.subscribeToSaveResponse(this.service.create(bankModel));
        }
    }

    private createFromForm(): BankModel {
        return {
            ...new BankModel(),
            code: this.editForm.get(['code'])!.value,
            name: this.editForm.get(['name'])!.value,
            shortName: this.editForm.get(['shortName'])!.value,
            uuid: this.editForm.get([('uuid')])!.value,
            enable: this.editForm.get([('enable')])!.value
        }
    }

    protected subscribeToSaveResponse(result: Observable<BankResponse>): void {
        result.subscribe(
            () => this.onSaveSuccess(),
            () => this.onSaveError()
        );
    }

    protected onSaveSuccess(): void {
        this.isSaving = false;
        this.previousState();
    }

    protected onSaveError(): void {
        this.isSaving = false;
    }
}
