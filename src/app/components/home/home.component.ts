import { Component } from '@angular/core';
import homeInfo from './home.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeInfo = homeInfo;
  homeHeight = window.innerHeight;
}
