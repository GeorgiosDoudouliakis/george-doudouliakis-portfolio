/* Place your angular imports here */
import { Component, Input } from '@angular/core';

/* Place your interface imports here */
import { Project } from "../../interfaces/project.interface";

@Component({
  selector: 'portfolio-project-item',
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent {
  @Input() public project!: Project;
}
