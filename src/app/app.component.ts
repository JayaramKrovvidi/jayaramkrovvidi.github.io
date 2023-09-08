import { Component, AfterViewInit, HostListener } from '@angular/core';
declare var VANTA;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'jayaramkrovvidi.github.io';

  private gradient!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;

  constructor() { }

  ngAfterViewInit(): void {
    this.gradient = document.querySelector('.gradient') as HTMLElement;
    this.updateGradientPosition();
    VANTA.NET({
      el: "#vanta",
      color: 0x606060,
      backgroundColor: 0x222222,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 800.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      points: window.innerWidth < 576 ? 6 : 10
    })
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  @HostListener('scroll', ['$event'])
  onScroll(): void {
    this.updateGradientPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateGradientPosition();
  }

  updateGradientPosition(): void {
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    const centerX = this.mouseX - this.gradient.offsetWidth / 2 + scrollX;
    const centerY = this.mouseY - this.gradient.offsetHeight / 2 + scrollY;

    this.gradient.style.left = `${centerX}px`;
    this.gradient.style.top = `${centerY}px`;

    requestAnimationFrame(() => this.updateGradientPosition());
  }
}
