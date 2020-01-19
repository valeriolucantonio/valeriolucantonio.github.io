import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { NzIconModule, NZ_ICONS } from 'ng-zorro-antd/icon';
import {
  PushpinOutline,
  ReadOutline,
  FireOutline,
  HistoryOutline,
  HomeOutline,
  PhoneOutline,
  UserOutline,
  MailOutline,
  LinkedinOutline,
  CalendarOutline,
  TeamOutline,
  ExperimentOutline,
  BookOutline,
  BankOutline
} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const icons: IconDefinition[] = [
  CalendarOutline,
  PushpinOutline,
  ReadOutline,
  FireOutline,
  HistoryOutline,
  HomeOutline,
  PhoneOutline,
  UserOutline,
  MailOutline,
  LinkedinOutline,
  TeamOutline,
  ExperimentOutline,
  BookOutline,
  BankOutline
];

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SectionComponent } from './components/section/section.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    FooterComponent,
    EducationComponent,
    ExperienceComponent,
    HomeComponent,
    MenuComponent,
    SectionComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    NzIconModule
  ],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
