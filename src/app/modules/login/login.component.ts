import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(private service: LoginService, private roteador: Router) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm){

    if(formLogin.invalid){
      formLogin.controls['email'].markAsTouched();
      formLogin.controls['senha'].markAsTouched();
      return
    }

    this.service
        .autenticar(this.login)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.roteador.navigate(['inbox']);
          }
          , erro => {
            console.log(erro);

          }
        );

  }

}
