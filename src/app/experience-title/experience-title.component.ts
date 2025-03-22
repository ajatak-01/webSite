import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-experience-title',
  imports: [FontAwesomeModule],
  templateUrl: './experience-title.component.html',
  styleUrl: './experience-title.component.scss'
})
export class ExperienceTitleComponent {
  faLocationDot = faLocationDot;

  @Input() title: string = '';
  @Input() dates: string = '';
  @Input() location: string = '';
}
