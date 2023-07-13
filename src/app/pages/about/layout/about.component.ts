/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

/* Place your interface imports here */
import { Skill } from "../interfaces/skill.interface";

/* Place any other imports here */
import { FADE_IN } from '../../../animations/fade-in.animation';
import { SKILLS } from "../mock/skills.mock";

@Component({
  selector: 'portfolio-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [NgFor],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class AboutComponent {
  public skills: Skill[] = SKILLS;
}
