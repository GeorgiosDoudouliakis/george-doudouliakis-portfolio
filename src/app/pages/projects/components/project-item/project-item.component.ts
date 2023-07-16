/* Place your angular imports here */
import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';

/* Place your component imports here */
import { ProjectItemModalComponent } from "../project-item-modal/project-item-modal.component";

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
  @ViewChild('projectModalEntry', { read: ViewContainerRef }) projectModalEntry!: ViewContainerRef;

  public openModal(): void {
    const projectModalCmpRef = this.projectModalEntry.createComponent(ProjectItemModalComponent);
    projectModalCmpRef.instance.project = this.project;
    projectModalCmpRef.instance.modalCmpRef = projectModalCmpRef;
  }
}
