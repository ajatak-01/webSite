import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(public trad: TranslateService) {}

  faPhone = faPhone;
  faEnvelope = faEnvelope;
}
