import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public trad: TranslateService) {}
}
