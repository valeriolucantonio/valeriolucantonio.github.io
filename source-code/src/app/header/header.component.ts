import { Component, Input, HostListener } from '@angular/core';
import { Menu } from '@app/@interfaces/menu.interface';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() menuItems: Menu[];
  headerFixed = true;
  lastScrollTop: number;
  menuOpen = false;

  scrollToElement(element: string): void {
    document.getElementById(element).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.menuOpen = false;
  }

  @HostListener('window:scroll', ['$event']) onScroll() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop) {
      this.headerFixed = false;
      this.menuOpen = false;
    } else {
      this.headerFixed = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
}
