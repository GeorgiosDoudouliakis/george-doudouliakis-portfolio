/* Place your angular imports here */
import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

/* Place your component imports here */
import { ProjectItemComponent } from "../components/project-item/project-item.component";

/* Place your interface imports here */
import { Project } from "../interfaces/project.interface";

/* Place any other imports here */
import { PROJECTS } from "../mock/projects.mock";

@Component({
  selector: 'portfolio-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor, ProjectItemComponent]
})
export class ProjectsComponent {
  public projects: Project[] = PROJECTS;
}
