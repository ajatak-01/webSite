import { Component, Input } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experience-title',
  standalone: false,
  templateUrl: './experience-title.component.html',
  styleUrl: './experience-title.component.scss'
})
export class ExperienceTitleComponent {
  faLocationDot = faLocationDot;

  @Input() title: string = '';
  @Input() dates: string = '';
  @Input() location: string = '';
}
