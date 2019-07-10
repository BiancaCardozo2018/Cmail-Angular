import { Component } from "@angular/core";
import { Email } from './models/email';

@Component({
    selector:'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'] 
})
export class AppComponent {

    private _isNewEmailFormOpen = false;

    email: Email = new Email();

    get isNewEmailFormOpen(){
        return this._isNewEmailFormOpen;
    }

    toggleNewEmailForm(){
        this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
    }

    enviarEmail(eventoSubmit: Event){  
        eventoSubmit.preventDefault();
        console.log(this.email);
    }
}