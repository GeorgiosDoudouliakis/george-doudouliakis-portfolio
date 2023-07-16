/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

/* Place your component imports here */
import { ProjectItemComponent } from "../components/project-item/project-item.component";

/* Place your interface imports here */
import { Project } from "../interfaces/project.interface";

/* Place any other imports here */
import { PROJECTS } from "../mock/projects.mock";
import { FADE_IN } from "../../../animations/fade-in.animation";

@Component({
  selector: 'portfolio-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor, ProjectItemComponent],
  animations: [FADE_IN],
  host: {
    "[@fadeIn]": "true"
  }
})
export class ProjectsComponent {
  public projects: Project[] = PROJECTS;
}
