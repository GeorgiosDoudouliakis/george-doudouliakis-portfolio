/* Place your angular imports here */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [RouterModule],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class FooterComponent {
  public currentYear = new Date().getFullYear();

  constructor(private _window: Window) {}

  public goTop(): void {
    this._window.scrollTo(0, 0);
  }
}
