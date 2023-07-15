/* Place your angular imports here */
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

/* Place any other imports here */
import { FADE_IN } from "../../animations/fade-in.animation";

@Component({
  selector: 'portfolio-page-not-found',
  standalone: true,
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  imports: [RouterModule],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class PageNotFoundComponent {}
