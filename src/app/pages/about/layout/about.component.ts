/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your component imports here */
import { SkillsComponent } from "../components/skills/skills.component";

/* Place any other imports here */
import { FADE_IN } from '../../../animations/fade-in.animation';

@Component({
  selector: 'portfolio-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [SkillsComponent],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class AboutComponent {}
