import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialComponent } from "../social/social.component";

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.scss'],
    imports: [RouterLink, SocialComponent]
})
export class BannerComponent {

  public title = "";

    // Local Variables
    authenticated: boolean = false;
    isMenuOpen = false;
  
    constructor() {

    }
    
    ngOnInit() {
    }
  
    toggleMenu(): void {
      this.isMenuOpen = !this.isMenuOpen;
    }
}
