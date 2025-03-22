import { Component } from '@angular/core';
import { ExperienceTitleComponent } from '../experience-title/experience-title.component';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-xp',
  imports: [ExperienceTitleComponent],
  templateUrl: './xp.component.html',
  styleUrl: './xp.component.scss'
})
export class XpComponent {
  constructor(public trad: TranslateService) {}
}
