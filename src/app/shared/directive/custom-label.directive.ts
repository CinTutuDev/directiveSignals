import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {
  @Input() set color(value: string) {
    this._color = value;
    this.setColor();
  }
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  constructor(private el: ElementRef<HTMLElement>) {
    /* console.log('cosntructor directiva'); */
    /*  console.log(el); */
    this.htmlElement = el;
    /*  this.htmlElement.nativeElement.innerHTML = ''; */
  }
  ngOnInit(): void {
    this.setColor();
  }

  /*   @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  } */

  private setColor() {
    if (!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }
}
