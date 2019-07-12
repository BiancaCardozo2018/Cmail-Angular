import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CaixaDeEntradaComponent],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    RouterModule
  ]
})
export class CaixaDeEntradaModule { }
