import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _isEmailOpen = false;
  listaEmails = [];

  email: Email = new Email({destinatario: '', assunto: '', conteudo: ''});

  get isEmailOpen(){
    return this._isEmailOpen;
  }
 
  toggleEmailForm(){
    this._isEmailOpen = !this.isEmailOpen
  }

  enviarEmail(formEmail: NgForm){

    if(formEmail.invalid){
      formEmail.controls['para'].markAsTouched();
      formEmail.controls['assunto'].markAsTouched();
      return
    }

    let novoEmail = new Email(this.email);
    this.listaEmails.push(novoEmail);
    formEmail.resetForm();
    this.toggleEmailForm();

  }

}
