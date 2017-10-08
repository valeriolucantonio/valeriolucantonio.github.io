import { Component, OnInit, Input } from '@angular/core';
import { JsonProviderService } from '../services/json-provider.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [JsonProviderService]
})
export class SkillsComponent implements OnInit {
  public ready: boolean = false;
  public skills: any;
  @Input() source: string;
 
  constructor(public js: JsonProviderService) {}

  fillSection(skills: any) {
    this.skills = skills;
    this.ready = true;
  }

  ngOnInit() {
    let subscription = this.js.getData(this.source)
     .subscribe(value => this.fillSection(value.json()));
  }

}
