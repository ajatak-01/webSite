import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { TabService } from '../tab.service';
import { NavBarTabList } from '../nav-bar/nav-bar.component';
import { SkillsComponent } from '../skills/skills.component';
import { ContactComponent } from '../contact/contact.component';
import { FormationComponent } from '../formation/formation.component';
import { XpComponent } from '../xp/xp.component';

@Component({
  selector: 'app-contain',
  imports: [HomeComponent, SkillsComponent, ContactComponent, FormationComponent, XpComponent],
  templateUrl: './contain.component.html',
  styleUrl: './contain.component.scss'
})
export class ContainComponent {

  constructor(public tabService: TabService) {};

  navBarList = NavBarTabList;
}
