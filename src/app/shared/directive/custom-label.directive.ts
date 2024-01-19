import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit{

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    /* console.log('cosntructor directiva'); */
    console.log(el);
    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = ' Hola Cinta'
  }
  ngOnInit(): void {
   console.log('Directiva NgOnInit');
  }

}
