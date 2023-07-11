/* Place your angular imports here */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";

enum Theme {
  LIGHT = "light",
  DARK = "dark"
}

@Component({
  selector: 'portfolio-theme-changer',
  standalone: true,
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
  imports: [CommonModule]
})
export class ThemeChangerComponent implements OnInit {
  public theme: Theme = Theme.DARK;
  public themeType = Theme;

  constructor() {}

  public ngOnInit(): void {}

  public changeTheme(): void {
    this.theme = (this.theme === Theme.DARK) ? Theme.LIGHT : Theme.DARK;
  }
}
