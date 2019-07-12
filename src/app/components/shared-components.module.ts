import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
