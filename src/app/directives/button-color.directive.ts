import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appButtonColor]',
})
export class ButtonColorDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.color = 'red';
    element.nativeElement.style.backgroundColor = 'white';
  }
}
