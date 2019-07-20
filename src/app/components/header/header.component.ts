import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css',
    './header-search.css'
  ]
})
export class HeaderComponent {

  @Input() titulo = "";
  @Output() filtra = new EventEmitter();

  constructor(private pageData: PageDataService){
    this.pageData.titulo.subscribe(novoTitulo => this.titulo = novoTitulo);
  }

  menuTaAberto = false;

  toggleMenu() {
    this.menuTaAberto = !this.menuTaAberto;
    console.log(this.menuTaAberto);
  }

  enviarDadosFiltro(textoDigitado){
    console.log(textoDigitado);

    this.filtra.emit(textoDigitado);
  }

}
