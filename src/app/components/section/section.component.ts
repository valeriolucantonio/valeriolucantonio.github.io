import { Component, Input } from '@angular/core';

interface ISection {
  image: string;
  details: Array<{
    icon: string;
    description: string;
  }>;
  description: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  @Input() section: ISection;
  @Input() size = 110;
}
