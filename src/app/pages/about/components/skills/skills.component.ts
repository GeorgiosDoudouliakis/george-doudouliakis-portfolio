/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

/* Place your component imports here */
import { SkillItemComponent } from "../skill-item/skill-item.component";

/* Place your interface imports here */
import { Skill } from "../../interfaces/skill.interface";

/* Place any other imports here */
import { SKILLS } from "../../mock/skills.mock";

@Component({
  selector: 'portfolio-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [NgFor, SkillItemComponent]
})
export class SkillsComponent {
  public skills: Skill[] = SKILLS;
}
