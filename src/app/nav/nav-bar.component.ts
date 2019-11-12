import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})

export class NavbarComponent {
  public signedIn: boolean = false;

  public isActive = false;
  toggleMenu() {
    if (this.isActive) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }
  }
}
