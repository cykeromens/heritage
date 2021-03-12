import {Directive, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[efoMin][ngModel]',
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => EfoMinValidatorDirective), multi: true}]
})
export class EfoMinValidatorDirective {
    @Input() efoMin!: number;

    constructor() {
    }

    validate(c: FormControl): any {
        return c.value === undefined || c.value === null || c.value >= this.efoMin
            ? null
            : {
                min: {
                    valid: false
                }
            };
    }
}
