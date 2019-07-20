import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';
import { PageDataService } from 'src/app/services/page-data.service';
import { FiltroEmailPipe } from './filtro-email.pipe';

@NgModule({
  declarations: [CaixaDeEntradaComponent, FiltroEmailPipe],
  exports: [CaixaDeEntradaComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  providers: [
    EmailService,
    PageDataService
  ]
})
export class CaixaDeEntradaModule { }
