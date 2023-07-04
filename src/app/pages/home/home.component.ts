/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place any other imports here */
import { FADE_IN } from '../../animations/fade-in.animation';

@Component({
  selector: 'portfolio-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class HomeComponent {}
