import { Component, Input, OnInit} from '@angular/core';
import { JsonProviderService } from '../../services/json-provider.service';
import 'rxjs/Rx';

interface section {
  image: string,
  details: [{description: string, icon: string}],
  description: string
}
interface sectionDescriptor {
  title: string,
  sectionId: string,
  sections: [section]
};

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  providers: [JsonProviderService]

})
export class SectionComponent implements OnInit {
  public section: sectionDescriptor;
  public ready: boolean = false;
  @Input() source: string;
 
  constructor(public js: JsonProviderService) {}

  ngOnInit() {
    let subscription = this.js.getData(this.source)
     .subscribe(value => this.fillSection(<sectionDescriptor> value.json()));
  }

  fillSection(section: sectionDescriptor) {
    this.section = section;
    this.ready = true;
  }
}
