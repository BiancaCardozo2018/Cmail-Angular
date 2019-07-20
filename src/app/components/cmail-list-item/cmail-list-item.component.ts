import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cmail-cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styleUrls: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() conteudo = '';
  @Input() dataDeEnvio = '';
  @Input() id = '';
  @Output('eventoVaiRemover')vaiRemover = new EventEmitter();
  

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event){
    console.log('Clicou no botão remover !');
    
    if (confirm('Tem certeza ?')) {
      this.vaiRemover.emit({status: 'removing'})
    }
  }
}
