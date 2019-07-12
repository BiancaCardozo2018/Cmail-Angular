import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastroComponent],
  exports: [CadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
