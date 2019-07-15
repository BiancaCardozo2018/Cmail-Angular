import { Directive, ElementRef } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective {

  constructor(elemento: ElementRef) {

    let campo:HTMLInputElement = elemento.nativeElement;

    campo.id = elemento.nativeElement.name;
    campo.placeholder = ' ';
    campo.classList.add('mdl-textfield__input');

  }

}
