import {Directive,ElementRef, Renderer} from 'angular2/core'

@Directive({
    //[] means attribute
    selector: '[autoGrow]',
    host: {
        '(focus)': 'onMyFocus()',
        '(blur)' : 'onMyBlur()'
    }
})

export class AutoGrowDirective{
    constructor(private el: ElementRef, private ren: Renderer){

    }
    
    onMyFocus(){
        this.ren.setElementStyle(this.el.nativeElement, 'width', '200')
    }

    onMyBlur(){
        this.ren.setElementStyle(this.el.nativeElement, 'width', '120')
    }
}