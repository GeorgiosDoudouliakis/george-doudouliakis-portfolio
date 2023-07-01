/* Place your angular imports here */
import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();
}
