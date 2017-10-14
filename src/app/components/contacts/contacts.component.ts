import { Component, Input } from '@angular/core';

interface contact {
	link: string,
	icon: string
}
interface contactsList {
  contacts: [contact]
};

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  @Input() contacts: contactsList;
  constructor() {}
}
