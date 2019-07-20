import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = environment.api+'login';

  constructor(private http: HttpClient){}

  autenticar(dadosLogin){
    return this.http
                .post(this.url, dadosLogin)
                .pipe(
                  map((resposta: any)=>{
                    localStorage.setItem('cmail-token', resposta.token)
                    return {
                      avatarUrl: resposta.avatarUrl,
                      email: resposta.email,
                      name: resposta.name
                    }
                  })
                  ,catchError(erro => [erro])
                )
  }

}
