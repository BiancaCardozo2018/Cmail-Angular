import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

/* const rotasApp: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:nome', component: LoginComponent },
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: ''}
] */

const rotasApp: Routes = [
  { path: '', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)},
  { path: 'login', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)},
  { path: 'login/:nome', loadChildren: () => import(`./modules/login/login.module`).then(m => m.LoginModule)},
  { path: 'inbox', loadChildren: () => import(`./modules/caixa-de-entrada/caixa-de-entrada.module`).then(m => m.CaixaDeEntradaModule)},
  { path: 'cadastro', loadChildren: () => import(`./modules/cadastro/cadastro.module`).then(m => m.CadastroModule)},
  { path: '**', redirectTo: ''}
]


@NgModule({
  imports: [RouterModule.forRoot(rotasApp)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
