import { Component, Input } from '@angular/core';
import { Education } from '@app/@interfaces/education.interface';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss'],
})
export class StudiesComponent {
  @Input() education: Education;
}
