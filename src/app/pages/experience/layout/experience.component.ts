/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your interface imports here */
import { Experience } from "../interfaces/experience.interface";

/* Place any other imports here */
import { FADE_IN } from "../../../animations/fade-in.animation";
import { EXPERIENCES } from "../mock/experiences.mock";

@Component({
  selector: 'portfolio-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class ExperienceComponent {
  public experiences: Experience[] = EXPERIENCES;
}
