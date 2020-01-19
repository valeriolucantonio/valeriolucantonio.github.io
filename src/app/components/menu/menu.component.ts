import { Component } from '@angular/core';
import menuItems from './menu.items.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu = menuItems;

  //<720 fai scomparire le scritte
}
