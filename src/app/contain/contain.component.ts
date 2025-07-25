import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarTabList } from '../nav-bar/nav-bar.component';
import { TabService } from '../tab.service';

@Component({
  selector: 'app-contain',
  imports: [RouterOutlet],
  templateUrl: './contain.component.html',
  styleUrl: './contain.component.scss'
})
export class ContainComponent {

  constructor(public tabService: TabService) {};

  navBarList = NavBarTabList;
}
