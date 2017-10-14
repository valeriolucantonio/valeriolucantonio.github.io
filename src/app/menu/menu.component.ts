import { Component, OnInit, Input } from '@angular/core';
import { JsonProviderService } from '../services/json-provider.service';

interface menuDescriptor {
  name: string,
  link: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [JsonProviderService]
})
export class MenuComponent  implements OnInit {
  public menu: [menuDescriptor];
  public ready: boolean = false;
  @Input() source: string;
  
  constructor(public js: JsonProviderService) {}

  ngOnInit() {
    let subscription = this.js.getData(this.source)
     .subscribe(value => this.fillSection(value.json()));
  }

  fillSection(menu: [menuDescriptor]) {
    this.menu = menu;
    this.ready = true;
  }

  toggleIsActive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

}
