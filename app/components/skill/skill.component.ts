import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skills: [any];
  public ready: boolean = false;

  constructor() {}

  ngOnInit() {
    for (let skill of this.skills) {
      skill.full = Array(skill.rank).fill(1);
      skill.empty = Array(5 - skill.rank).fill(1);
    }
    this.ready = true;
  }
}
