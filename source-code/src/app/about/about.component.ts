import { Component, Input } from '@angular/core';
import { About } from '@app/@interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  @Input() about: About;
}
