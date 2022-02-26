import { Component, Input } from '@angular/core';
import { Contact } from '@app/@interfaces/contact.interface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  @Input() contact: Contact;
}
