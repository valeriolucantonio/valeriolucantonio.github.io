import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Landing } from './@interfaces/landing.interface';
import { About } from './@interfaces/about.interface';
import { Experience } from './@interfaces/experience.interface';
import { Education } from './@interfaces/education.interface';
import { Contact } from './@interfaces/contact.interface';
import { Projects } from './@interfaces/projects.interface';
import { Menu } from './@interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private httpClient: HttpClient) {}

  getLanding(): Observable<Landing> {
    return this.httpClient.get<Landing>('./assets/resources/landing.json');
  }

  getAbout(): Observable<About> {
    return this.httpClient.get<About>('./assets/resources/about.json');
  }

  getExperience(): Observable<Experience> {
    return this.httpClient.get<Experience>('./assets/resources/experience.json');
  }

  getEducation(): Observable<Education> {
    return this.httpClient.get<Education>('./assets/resources/education.json');
  }

  getContact(): Observable<Contact> {
    return this.httpClient.get<Contact>('./assets/resources/contact.json');
  }

  getProjects(): Observable<Projects> {
    return this.httpClient.get<Projects>('./assets/resources/projects.json');
  }

  getMenu(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>('./assets/resources/menu.json');
  }
}
