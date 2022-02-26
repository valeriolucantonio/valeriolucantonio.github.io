import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { LandingComponent } from './landing/landing.component';
import { ExperienceComponent } from './experience/experience.component';
import { StudiesComponent } from './studies/studies.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule, NgbModule],
  declarations: [
    AppComponent,
    LandingComponent,
    ExperienceComponent,
    StudiesComponent,
    AboutComponent,
    FooterComponent,
    ContactsComponent,
    ProjectsComponent,
    HeaderComponent,
    LoadingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
