import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login-routing.module';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    LoginRoutingModule,
    SharedComponentsModule,
    FormsModule,
    HttpClientModule
  ]
  ,providers: [
    LoginService
  ]
})
export class LoginModule { }
