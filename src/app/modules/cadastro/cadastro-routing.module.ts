import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro.component';
import { PageDataService } from 'src/app/services/page-data.service';

const routes: Routes = [
  {path: '', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PageDataService]
})
export class CadastroRoutingModule { }
