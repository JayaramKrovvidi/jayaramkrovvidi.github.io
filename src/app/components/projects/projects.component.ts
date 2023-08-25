import { Component, Input } from '@angular/core';
import { Project, SectionData } from 'assets/portfolio-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input()
  projects!: SectionData<Project>;

}
