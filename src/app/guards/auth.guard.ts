import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router){}

  canActivate(){

    if(!localStorage.getItem('cmail-token')){
      this.roteador.navigate(['login']);
    }

    return true;

  }

}
