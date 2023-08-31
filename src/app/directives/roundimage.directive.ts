import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[roundImage]'
})
export class RoundImageDirective {
    imageSize: number;

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.imageSize = this.calculateImageSize(window.innerWidth);
        this.applyStyles();
    }

    private calculateImageSize(windowWidth: number): number {
        return Math.min(80, windowWidth * 0.1); // Adjust the factor as needed
    }

    private applyStyles() {
        this.renderer.setStyle(this.el.nativeElement, 'border-radius', '50%');
        this.renderer.setStyle(this.el.nativeElement, 'width', `${this.imageSize}px`);
        this.renderer.setStyle(this.el.nativeElement, 'height', `${this.imageSize}px`);
    }
}
