import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';
import { ExperienceTitleComponent } from '../experience-title/experience-title.component';

@Component({
  selector: 'app-formation',
  imports: [ExperienceTitleComponent],
  templateUrl: './formation.component.html',
  styleUrl: './formation.component.scss'
})
export class FormationComponent {
  constructor(public trad: TranslateService) {}
}
