import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { EmailInput } from '../models/dto/email-input';
import { map } from 'rxjs/operators';
import { EmailOutput } from '../models/dto/email-output';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

  url = environment.api+'emails';

  headersAuth = {
    headers: new HttpHeaders('Authorization: '+localStorage.getItem('cmail-token'))
  }

  constructor(private http: HttpClient){}

  enviar(email: Email){

    /*
    let emailDto: EmailInput = {
      content: email.conteudo,
      to: email.destinatario,
      subject: email.assunto
    } */

    let emailDto = new EmailInput(email);
    return this.http.post(this.url,emailDto,this.headersAuth);
  }

  carregar(): Observable<Email[]>{
    return this.http
                .get<EmailOutput[]>(this.url,this.headersAuth)
                .pipe(
                  map(
                    listaEmails => {

                      return listaEmails.map( emailApi => {

                        let email: Email = {
                          destinatario: emailApi.to,
                          conteudo: emailApi.content,
                          assunto: emailApi.subject,
                          remetente: emailApi.from,
                          id: emailApi.id,
                          dataEnvio: emailApi.created_at
                        }

                        return email;

                      })

                    }
                  )
                )
  }

  deletar(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`, this.headersAuth)
  }

}
