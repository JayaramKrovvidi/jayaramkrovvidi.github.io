import { Component, Input } from '@angular/core';
import { Education } from 'assets/portfolio-data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  @Input()
  educationData!: Education[];

}
