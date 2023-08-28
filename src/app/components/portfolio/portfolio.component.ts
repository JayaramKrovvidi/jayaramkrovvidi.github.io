import { Component, ElementRef } from '@angular/core';
import { resumeData } from 'portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {

  constructor(private el: ElementRef) {}

  resumeData = resumeData;

  sections: Map<string, string> = new Map<string, string>([
    ['about', 'About Me'],
    ['education', 'Education'],
    ['experience', 'Work Experience'],
    ['projects', 'Projects'],
    ['certifications', 'Skills']
  ]);

  sectionOrder: string[] = ['about', 'education', 'experience', 'projects', 'certifications'];
  currentSection: string = 'about';

  scrollToSection(section: string): void {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      const navBar = this.el.nativeElement.querySelector('.nav-bar');
      const navbarHeight = navBar ? navBar.offsetHeight : 0;
      const finalScrollPosition = sectionElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: finalScrollPosition, behavior: 'smooth' });
    }
  }
  
}
