import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/email';

@Pipe({
  name: 'filtroEmails'
})
export class FiltroEmailPipe implements PipeTransform {

  transform(listaEmails: Email[], termoFiltro: string){
    return listaEmails
              .filter(
                (email)=>{
                  if(
                    email.assunto.toLowerCase().includes(termoFiltro.toLowerCase())
                    || email.conteudo.toLowerCase().includes(termoFiltro.toLowerCase())
                  ){
                    return email
                  }
                }
              )
  }

}
