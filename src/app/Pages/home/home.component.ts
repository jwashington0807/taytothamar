import { Component } from '@angular/core';
import { IntroComponent } from '../../sections/intro/intro.component';
import { MultimediaComponent } from '../../sections/multimedia/multimedia.component';
import { BlurbComponent } from "../../sections/blurb/blurb.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [IntroComponent, MultimediaComponent, BlurbComponent]
})
export class HomeComponent {

}
