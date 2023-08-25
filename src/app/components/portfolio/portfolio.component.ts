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
}
