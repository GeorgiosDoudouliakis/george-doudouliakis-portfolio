/* Place your angular imports here */
import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your interface imports here */
import { Experience } from "../../interfaces/experience.interface";

@Component({
  selector: 'portfolio-experience-item',
  standalone: true,
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss'],
  imports: [CommonModule]
})
export class ExperienceItemComponent {
  @Input() public experience!: Experience;
}
