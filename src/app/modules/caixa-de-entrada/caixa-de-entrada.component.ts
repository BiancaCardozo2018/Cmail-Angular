import { Component, OnInit } from '@angular/core';
import { Email } from '../../models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  private _isEmailOpen = false;
  listaEmails = [];

  email: Email = new Email({destinatario: '', assunto: '', conteudo: ''});

  termoDeFiltro = '';

  constructor(private servico: EmailService, private pageData: PageDataService) {}

  ngOnInit() {
    this.carregarEmails();
    this.pageData.atualizarTitulo('Caixa de Entrada');
  }

  carregarEmails(){
    this.servico
        .carregar()
        .subscribe(
          listaEmailsApi => this.listaEmails = listaEmailsApi
          ,erro => console.log(erro)
        )
  }

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

    this.servico
        .enviar(this.email)
        .subscribe(
          () => {
            this.carregarEmails();
            formEmail.resetForm();
            this.toggleEmailForm();
          }
          , erro => console.log(erro)
        )

  }

  apagar(id){
    this.servico
        .deletar(id)
        .subscribe(
          res => {
            this.carregarEmails();
          }
          ,erro => console.log(erro)

        )
  }

  getDadosFiltro(textoDigitado){
    this.termoDeFiltro = textoDigitado;
  }

  filtroEmails(){

    return this
              .listaEmails
              .filter(
                (email)=>{
                  if(
                    email.assunto.toLowerCase().includes(this.termoDeFiltro.toLowerCase())
                    || email.conteudo.toLowerCase().includes(this.termoDeFiltro.toLowerCase())
                  ){
                    return email
                  }
                }
              )
              .reverse()
  }

}
