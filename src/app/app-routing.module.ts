import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const rotasApp: Routes = [
  {
    path: ''
    ,loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: 'login'
    ,loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)},
  {
    path: 'login/:nome'
    ,loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)
  }
  ,
  {
    path: 'inbox'
    ,canActivate: [AuthGuard]
    ,loadChildren: () => import(`./modules/caixa-de-entrada/caixa-de-entrada.module`).then(m => m.CaixaDeEntradaModule)
  },
  {
    path: 'cadastro'
    ,loadChildren: () => import(`./modules/cadastro/cadastro.module`).then(m => m.CadastroModule)},
  {
    path: '**'
    , redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(rotasApp)
  ]
  ,exports: [
    RouterModule
  ]
  ,providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {}
