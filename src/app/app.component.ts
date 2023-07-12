/* Place your angular imports here */
import { Component, OnInit } from '@angular/core';

/* Place your service imports here */
import { ThemeService } from "./services/theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private _themeService: ThemeService) {}

  public ngOnInit(): void {
    this._themeService.initializeTheme();
  }
}
