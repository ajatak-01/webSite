import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContainComponent } from './contain/contain.component';

@Component({
  selector: 'app-root',
  imports: [NavBarComponent, ContainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webSite';
}
