/* Place your angular imports here */
import { Component, ComponentRef, Input } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your interface imports here */
import { Project } from "../../interfaces/project.interface";

/* Place any other imports here */
import { SHOW_MODAL } from "../../animations/show-modal.animation";

@Component({
  selector: 'portfolio-project-item-modal',
  standalone: true,
  templateUrl: './project-item-modal.component.html',
  styleUrls: ['./project-item-modal.component.scss'],
  imports: [CommonModule],
  animations: [SHOW_MODAL]
})
export class ProjectItemModalComponent {
  @Input() public project!: Project;
  @Input() public modalCmpRef!: ComponentRef<ProjectItemModalComponent>;

  public closeModal(): void {
    this.modalCmpRef.destroy();
  }
}
