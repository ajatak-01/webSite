import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import '@cds/core/global.min.css';
import '@cds/core/styles/theme.dark.min.css';
import '@clr/ui/clr-ui.min.css';


@Component({
  selector: 'app-root',
  imports: [NavBarComponent, CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webSite';
}
