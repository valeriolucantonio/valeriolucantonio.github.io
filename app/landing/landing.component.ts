import { Component, OnInit, Input } from '@angular/core';
import { JsonProviderService } from '../services/json-provider.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [JsonProviderService]

})
export class LandingComponent {
  @Input() landing: any;
  @Input() contacts: any;
  public ready = false;

  constructor(public js: JsonProviderService) {}

  ngOnInit() {
    let landing = this.js.getData(this.landing);
    let contacts = this.js.getData(this.contacts);
     Observable.forkJoin([landing, contacts])
     .subscribe(values => this.fillSection(values[0].json(), values[1].json()));
  }

  fillSection(landing: any, contacts: any) {
  	this.landing = landing;
    this.contacts = contacts.contacts;
    this.ready = true;
  }
}
