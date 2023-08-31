import { Component, Input } from '@angular/core';
import { Project } from 'portfolio-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input()
  project!: Project;

}
