import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule
  ]
})
export class CaixaDeEntradaModule { }
