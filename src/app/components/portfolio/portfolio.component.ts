import { Component } from '@angular/core';
import { resumeData } from 'assets/portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  resumeData = resumeData;

  sections: string[] = ['About Me', 'Education', 'Work Experience', 'Projects', 'Certifications']
  activeSection: string = 'about';
  mobileMenuOpen: boolean = false;

  scrollToSection(section: string): void {
    const sectionElement = document.getElementById(section.toLowerCase().replace(' ', '-'));
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      this.mobileMenuOpen = false;
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  updateActiveSection(): void {
    const scrollPosition = window.scrollY;
    const sectionOffsets = this.sections.map(section => {
      const sectionElement = document.getElementById(section.toLowerCase().replace(' ', '-'));
      return {
        section,
        offsetTop: sectionElement ? sectionElement.offsetTop : 0
      };
    });

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i].offsetTop - 100) { // Adjust the offset as needed
        this.activeSection = sectionOffsets[i].section;
        break;
      }
    }
  }
}
