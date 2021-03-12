import {Injectable} from '@angular/core';
import {faSort, faSortDown, faSortUp, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Injectable({
    providedIn: 'root'
})
export class EfoModuleConfig {
    sortIcon: IconDefinition = faSort;
    sortAscIcon: IconDefinition = faSortUp;
    sortDescIcon: IconDefinition = faSortDown;
    i18nEnabled? = false;
    defaultI18nLang? = 'en';
    alertAsToast? = false;
    alertTimeout?: number;
}
