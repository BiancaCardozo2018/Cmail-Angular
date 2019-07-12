import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    RouterModule
  ]
})
export class LoginModule { }
