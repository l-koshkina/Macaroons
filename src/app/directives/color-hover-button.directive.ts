import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[colorHoverButton]'
})
export class ColorHoverButtonDirective implements OnInit{

  constructor(private el: ElementRef,
              private rend: Renderer2) {
  }

  @Input() startColor: string = 'rgb(239,90,123)';
  @Input() endColor: string = 'rgb(245,144,157)';

  @HostListener('mouseenter')
  onMouseEnter() {
    const gradient = `linear-gradient(0deg, ${this.startColor} 0%, ${this.endColor} 100%)`
    this.rend.setStyle(this.el.nativeElement, 'background', gradient)
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.rend.removeStyle(this.el.nativeElement, 'background')

  }
  ngOnInit() {

  }

}
