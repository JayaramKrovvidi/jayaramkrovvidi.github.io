import { Component, Input } from '@angular/core';
import { AboutMe } from 'assets/portfolio-data';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  @Input()
  about!: AboutMe;
}
