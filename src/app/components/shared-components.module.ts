import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { ListItemComponent } from './list-item/list-item.component';
import { PageDataService } from '../services/page-data.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    ListItemComponent
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
  ,providers: [
    PageDataService
  ]
})
export class SharedComponentsModule { }
