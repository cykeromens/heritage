import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {EfoModuleConfig} from './config';
import {EFO_COMPONENTS, EFO_DIRECTIVES, EFO_PIPES} from './efo-components';

@NgModule({
    imports: [CommonModule, NgbModule, FormsModule],
    declarations: [...EFO_PIPES, ...EFO_DIRECTIVES, ...EFO_COMPONENTS],
    exports: [...EFO_PIPES, ...EFO_DIRECTIVES, ...EFO_COMPONENTS, CommonModule]
})
export class EfoCommonModule {
    static forRoot(moduleConfig: EfoModuleConfig): ModuleWithProviders {
        return {
            ngModule: EfoCommonModule,
            providers: [{provide: EfoModuleConfig, useValue: moduleConfig}]
        };
    }
}
