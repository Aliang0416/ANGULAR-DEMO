import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

interface Options {
  bgColor?: string
}

@Directive({
  selector: '[appClick]'
})

export class ClickDirective implements AfterViewInit{

  @Input('appClick')  appClick: Options = {}

  element: HTMLElement

  constructor(private elementRef: ElementRef) {
    this.element = this.elementRef.nativeElement
  }

  ngAfterViewInit() {
    console.log(this.element)
  }

  @HostListener('click') click () {
    this.element.style.backgroundColor = this.appClick.bgColor || 'skyblue'
    console.log(this.element)
  }

  @HostListener('mouseleave') leave() {
    this.element.style.backgroundColor = ''
  }

}
