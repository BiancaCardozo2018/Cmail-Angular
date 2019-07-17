import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm){

    if (formLogin.valid) {
      this.httpClient
        .post('http://localhost:3200/login', this.login)
        .subscribe(
          (response) => {
            console.log(response);
            console.log('deu certo');
          },
          (error) => {
            console.log(error);
            console.log('deu ruim');
          }
        )
    }
  }

}
