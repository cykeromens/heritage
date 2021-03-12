import {Component} from '@angular/core';

@Component({
    selector: 'efo-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    today: Date;

    constructor() {
        this.today = new Date(Date.now());
    }
}
