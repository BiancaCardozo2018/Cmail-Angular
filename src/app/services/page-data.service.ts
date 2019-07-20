import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageDataService {

  titulo = new Subject<string>();

  atualizarTitulo(tituloNovo){
    document.title = `${tituloNovo} - CMail`;
    this.titulo.next(tituloNovo);
  }

}
