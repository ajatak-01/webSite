import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(public trad: TranslateService) {}
}
