import { Component, Input } from '@angular/core';
import { Projects } from '@app/@interfaces/projects.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  @Input() projects: Projects;
}
