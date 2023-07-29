/* Place your angular imports here */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule]
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
}
