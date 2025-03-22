import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';
import { TabService } from '../tab.service';

export enum NavBarTabList  {
  home = 'home',
  skills = 'skills',
  formations = 'formations',
  experiences = 'experiences',
  contact = 'contact'
}

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    constructor(public tradService: TranslateService, private tabService: TabService) {}

    buttonList = [NavBarTabList.home, NavBarTabList.skills, NavBarTabList.formations, NavBarTabList.experiences, NavBarTabList.contact];

    switchLang(event: any) {
      this.tradService.setCurrentLang(event.target.value)
    }

    switchTab(tab: NavBarTabList) {
      this.tabService.setCurrentTab(tab);
    }
}
