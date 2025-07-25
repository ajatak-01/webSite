import { Routes } from '@angular/router';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarTabList } from './nav-bar/nav-bar.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: NavBarTabList.candidate, component: CandidaturesComponent },
    { path: NavBarTabList.home, component: HomeComponent },
    { path: NavBarTabList.skills, component: SkillsComponent },
    { path: NavBarTabList.formations, component: FormationComponent },
    { path: NavBarTabList.experiences, component: XpComponent },
    { path: NavBarTabList.contact, component: ContactComponent }
];
