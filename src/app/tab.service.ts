import { Injectable } from '@angular/core';
import { NavBarTabList } from './nav-bar/nav-bar.component';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor() { }

  currentTab: NavBarTabList = NavBarTabList.home

  setCurrentTab(tab: NavBarTabList) {
    this.currentTab = tab;
  }
}
