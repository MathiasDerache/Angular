import {Directive,
        ElementRef,
        HostBinding,
        HostListener,
        Input, OnInit,
        Renderer2 } from "@angular/core";

@Directive({
  selector: '[colorMe]'
})

export class ColorfullDirective implements OnInit{

  @HostBinding('style.backgroundColor') backGroundColor: string;
  @Input() color:string;

  constructor(
    private elementRef:ElementRef,
    private renderer: Renderer2) {

     }

    ngOnInit(){
  this.elementRef.nativeElement.style.backgroundColor = this.color;
    }

    @HostListener('mouseenter') onMouseEnter(event : Event){
      // this.elementRef.nativeElement.style.backgroundColor = this.color;
      this.renderer.setStyle(this.elementRef.nativeElement, "background-color", this.color);
      this.backGroundColor = this.color;
    }


    @HostListener('mouseleave') onMouseLeave(event : Event){
      // this.elementRef.nativeElement.style.backgroundColor = 'transparent';
      this.renderer.setStyle(this.elementRef.nativeElement, "background-color", 'transparent');
      this.backGroundColor = 'transparent';
    }
}

