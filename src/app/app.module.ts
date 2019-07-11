import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
import { LoginModule } from './modules/login/login.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CadastroModule,
    CaixaDeEntradaModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
