import { Component, OnInit, Input } from '@angular/core';
import { JsonProviderService } from '../services/json-provider.service';

interface contactDescriptor {
	title: string,
	sectionId: string,
	contacts: [any]
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [JsonProviderService]
})
export class FooterComponent implements OnInit {
  public contacts: contactDescriptor;
  public ready: boolean = false;
  @Input() source: string;
  
  constructor(public js: JsonProviderService) {}

  ngOnInit() {
    let subscription = this.js.getData(this.source)
     .subscribe(value => this.fillSection( value.json()));
  }

  fillSection(contacts: contactDescriptor) {
    this.contacts = contacts;
    this.ready = true;
  }
}
