import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
    selector:'[change]',
})

export class AppDirectives{
    constructor(private ele : ElementRef,private render : Renderer2){
        this.render.setStyle(this.ele.nativeElement,"color",'red');
    }


}