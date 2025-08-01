import { Component } from '@angular/core';

import '@cds/core/global.min.css';
import '@cds/core/styles/theme.dark.min.css';
import '@clr/ui/clr-ui.min.css';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'webSite';
}
