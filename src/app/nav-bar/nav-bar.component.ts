import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';
import { TabService } from '../tab.service';
import { RouterLink } from '@angular/router';

export enum NavBarTabList  {
  home = 'home',
  skills = 'skills',
  formations = 'formations',
  experiences = 'experiences',
  contact = 'contact',
  candidate = 'candidate'
}

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
    constructor(public tradService: TranslateService, private tabService: TabService) {}

    buttonList = [NavBarTabList.candidate, NavBarTabList.home, NavBarTabList.skills, NavBarTabList.formations, NavBarTabList.experiences, NavBarTabList.contact];

    switchLang(event: any) {
      this.tradService.setCurrentLang(event.target.value)
    }

    switchTab(tab: NavBarTabList) {
      this.tabService.setCurrentTab(tab);
    }

    getTabLink(tab: NavBarTabList): string {
      return `/${tab}`;
    }
}


//<button (click)="switchTab(list)" class="button">{{tradService.getTrad(list)}}</button>