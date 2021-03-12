import {EfoItemCountComponent} from 'app/core/custom/component';
import {EfoMaxValidatorDirective} from './directive/max.directive';
import {EfoMinValidatorDirective} from './directive/min.directive';
import {EfoSortByDirective, EfoSortDirective} from 'app/core/custom/directive';
import {EfoFilterPipe} from './pipe/filter.pipe';
import {EfoOrderByPipe} from './pipe/order-by.pipe';

export const EFO_PIPES = [
    EfoFilterPipe,
    EfoOrderByPipe,
];

export const EFO_DIRECTIVES = [
    EfoMaxValidatorDirective,
    EfoMinValidatorDirective,
    EfoSortDirective,
    EfoSortByDirective
];

export const EFO_COMPONENTS = [
    EfoItemCountComponent,
];
