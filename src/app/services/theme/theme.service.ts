/* Place your angular imports here */
import { Injectable } from '@angular/core';

/* Place any other imports here */
import { ThemeType } from "../../enums/theme-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public initializeTheme(): void {
    if(!window.localStorage.getItem("theme")) {
      if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        this.setTheme(ThemeType.DARK);
        return;
      }

      this.setTheme(ThemeType.LIGHT);
    } else {
      this.setTheme(window.localStorage.getItem("theme") as ThemeType);
    }
  }

  public getTheme(): string | null {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if(!window.localStorage.getItem("theme")) {
      if(prefersDarkScheme) return ThemeType.DARK;
      return ThemeType.LIGHT;
    }

    return window.localStorage.getItem("theme");
  }

  public setTheme(theme: ThemeType): void {
    window.localStorage.setItem("theme", theme);
    document.body.className = `${theme}-theme`;
  }
}
