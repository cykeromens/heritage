import {Directive, forwardRef, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
    selector: '[efoMax][ngModel]',
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => EfoMaxValidatorDirective), multi: true}]
})
export class EfoMaxValidatorDirective {
    @Input() efoMax!: number;

    constructor() {
    }

    validate(c: FormControl): any {
        return c.value === undefined || c.value === null || c.value <= this.efoMax
            ? null
            : {
                max: {
                    valid: false
                }
            };
    }
}
