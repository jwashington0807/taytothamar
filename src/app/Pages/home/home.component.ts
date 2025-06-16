import { Component } from '@angular/core';
import { IntroComponent } from '../../sections/intro/intro.component';
import { PortfolioComponent } from '../../sections/portfolio/portfolio.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [IntroComponent, PortfolioComponent]
})
export class HomeComponent {

}
