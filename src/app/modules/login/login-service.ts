import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    url = environment.api+'login'

    constructor(private http: HttpClient){}

    autenticar(dadosLogin){
        return this.http
            .post(this.url, dadosLogin)
            .pipe(
                map((resposta:any) => {
                    localStorage.setItem('cmail-token', resposta.token)
                    return {
                        avatarUrl: resposta.avatarUrl,
                        email: resposta.email,
                        name: resposta.name
                    }
                })
            )
    }
}