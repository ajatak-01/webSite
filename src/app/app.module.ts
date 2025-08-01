import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { FormationComponent } from './formation/formation.component';
import { XpComponent } from './xp/xp.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClarityModule } from '@clr/angular';
import { ExperienceTitleComponent } from './experience-title/experience-title.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { TranslateService } from './translate.service';

@NgModule({
  declarations: [AppComponent, CandidaturesComponent, HomeComponent, SkillsComponent, ExperienceTitleComponent, FormationComponent, XpComponent, ContactComponent, NavBarComponent],
  exports: [AppComponent, CandidaturesComponent, HomeComponent, SkillsComponent, ExperienceTitleComponent, FormationComponent, XpComponent, ContactComponent, NavBarComponent],
  imports: [
    CommonModule,
    ClarityModule,
    FontAwesomeModule
  ],
  providers: [TranslateService],
})
export class AppModule { }
