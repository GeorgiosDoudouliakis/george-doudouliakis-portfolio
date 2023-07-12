/* Place your angular imports here */
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your service imports here */
import { ThemeService } from "../../services/theme/theme.service";

/* Place any other imports here */
import { ThemeType } from "../../enums/theme-type.enum";

@Component({
  selector: 'portfolio-theme-changer',
  standalone: true,
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss'],
  imports: [CommonModule]
})
export class ThemeChangerComponent {
  public theme = this._themeService.getTheme();
  public themeType = ThemeType;

  constructor(private _themeService: ThemeService) {}

  public changeTheme(): void {
    this.theme = (this.theme === ThemeType.DARK) ? ThemeType.LIGHT : ThemeType.DARK;
    this._themeService.setTheme(this.theme as ThemeType);
  }
}
