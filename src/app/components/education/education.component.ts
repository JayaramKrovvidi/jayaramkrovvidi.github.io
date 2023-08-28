import { Component, Input } from '@angular/core';
import { Education } from 'portfolio-data';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [
    trigger('expandAnimation', [
      state('collapsed', style({ height: '0', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
  ]
})
export class EducationComponent {

  @Input()
  education!: Education;

  expanded: boolean = false;
  
  toggleExpanded() {
    this.expanded = !this.expanded;
  }

}
