/* Place your interface imports here */
import { Component, Input } from '@angular/core';

/* Place your interface imports here */
import { Skill } from "../../interfaces/skill.interface";

@Component({
  selector: 'portfolio-skill-item',
  standalone: true,
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent {
  @Input() public skill = {} as Skill;
}
