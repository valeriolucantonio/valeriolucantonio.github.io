import { Component, OnInit } from '@angular/core';
import { forkJoin, take } from 'rxjs';
import { About } from './@interfaces/about.interface';
import { Contact } from './@interfaces/contact.interface';
import { Education } from './@interfaces/education.interface';
import { Experience } from './@interfaces/experience.interface';
import { Landing } from './@interfaces/landing.interface';
import { Menu } from './@interfaces/menu.interface';
import { Projects } from './@interfaces/projects.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  landing: Landing;
  about: About;
  experience: Experience;
  education: Education;
  contact: Contact;
  projects: Projects;
  menu: Menu[];
  loading = false;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.loading = true;

    forkJoin({
      landing: this.appService.getLanding(),
      about: this.appService.getAbout(),
      experience: this.appService.getExperience(),
      education: this.appService.getEducation(),
      contact: this.appService.getContact(),
      projects: this.appService.getProjects(),
      menu: this.appService.getMenu(),
    })
      .pipe(take(1))
      .subscribe((resources) => {
        this.landing = resources.landing;
        this.about = resources.about;
        this.experience = resources.experience;
        this.education = resources.education;
        this.contact = resources.contact;
        this.projects = resources.projects;
        this.menu = resources.menu;
        this.loading = false;
      });
  }
}
