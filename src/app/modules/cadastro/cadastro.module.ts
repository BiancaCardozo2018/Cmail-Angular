import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [CadastroComponent],
  exports: [CadastroComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CadastroRoutingModule
  ]
  ,providers: [
    UserService
  ]
})
export class CadastroModule { }
