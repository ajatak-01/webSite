import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false,
})
export class HomeComponent {
  constructor(public trad: TranslateService) { }

  getPicHref() {
    return 'assets/CV-cedric-gibelli-' + this.trad.currentLang + '.pdf';
  }
}
