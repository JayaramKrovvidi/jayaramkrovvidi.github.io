import { Component, Input } from '@angular/core';
import { SectionData, WorkExperience } from 'assets/portfolio-data';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  @Input()
  workExperience!: SectionData<WorkExperience>;
}
