import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule
  ]
})
export class CaixaDeEntradaModule { }
