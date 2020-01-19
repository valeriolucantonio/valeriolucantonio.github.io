import { Component } from '@angular/core';
import education from './education.json';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education = education;
}
