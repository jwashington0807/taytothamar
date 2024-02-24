import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
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
