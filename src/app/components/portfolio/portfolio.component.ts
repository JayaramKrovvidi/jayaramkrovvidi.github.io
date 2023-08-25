import { Component } from '@angular/core';
import { resumeData } from 'assets/portfolio-data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  resumeData = resumeData;
  sections = resumeData.sections;

  scrollToSection(sectionId: string): void {
    scrollToElement(sectionId);
  }
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
