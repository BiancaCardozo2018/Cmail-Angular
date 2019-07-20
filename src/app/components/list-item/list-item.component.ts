import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() destinatario = "";
  @Input() assunto = "";
  @Input() dataEnvio = "";
  @Input() conteudo = "";
  @Input() id = "";
  @Output() vaiExcluir = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  excluir(){

    if(confirm('tem certeza?')){
      this.vaiExcluir.emit(this.id);
    }

  }

}
