import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  handleLogin(formLogin: NgForm){

    if(formLogin.invalid){
      formLogin.controls['email'].markAsTouched();
      formLogin.controls['senha'].markAsTouched();
      return
    }

    this.http
        .post('http://localhost:3200/login',this.login)
        .subscribe(
          (res: any) => {
            console.log(res);
            localStorage.setItem('cmail-token', res.token)
          }
          , erro => {
            console.log(erro);

          }
        );



  }

}
