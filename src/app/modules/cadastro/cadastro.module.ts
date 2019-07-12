import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CadastroComponent],
  exports: [CadastroComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule,
    SharedComponentsModule
  ]
})
export class CadastroModule { }
