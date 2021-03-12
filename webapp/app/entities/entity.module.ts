import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'branch',
                loadChildren: () => import('./branch/branch.module').then(m => m.EFormBranchModule)
            },
            {
                path: 'account-type',
                loadChildren: () => import('./account-type/account-type.module').then(m => m.EformsAccountTypeModule)
            }, {
                path: 'corporate',
                loadChildren: () => import('./corporate/corporate.module').then(m => m.EFormCorporateModule)
            }
        ])
    ],
})
export class EformsEntityModule {
}
