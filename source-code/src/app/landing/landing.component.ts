import { Component, Input } from '@angular/core';
import { Landing } from '@app/@interfaces/landing.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @Input() landing: Landing;
}
