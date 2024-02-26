import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  @Input()
  sections: Map<string, string>;

  @Input()
  currentSection: string;

  @Input()
  sectionOrder: string[];

  @Output()
  sectionChange: EventEmitter<string> = new EventEmitter<string>();

  mobileMenuOpen: boolean = false;

  ngOnInit(): void {
    this.updateCurrentSection();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    this.updateCurrentSection();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  updateCurrentSection(): void {
    const scrollPosition = window.scrollY;
    const sectionOffsets = []
    this.sectionOrder.forEach(section => {
      const sectionElement = document.getElementById(section);
      sectionOffsets.push({
        section,
        offsetTop: sectionElement ? sectionElement.offsetTop : 0
      });
    });

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i].offsetTop - 150) { // Adjust the offset as needed
        this.currentSection = sectionOffsets[i].section;
        break;
      }
    }
  }

  sectionClicked(section: string): void {
    this.sectionChange.emit(section);
  }
}
