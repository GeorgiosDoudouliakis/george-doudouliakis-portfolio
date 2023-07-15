/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your component imports here */
import { ExperienceItemComponent } from "../components/experience-item/experience-item.component";

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
  imports: [CommonModule, ExperienceItemComponent],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class ExperienceComponent {
  public experiences: Experience[] = EXPERIENCES;
}
