import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [BannerComponent, RouterOutlet, FooterComponent]
})
export class AppComponent {
  title = 'tay2thamar';
}
