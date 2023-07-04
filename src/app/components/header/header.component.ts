/* Place your angular imports here */
import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterModule],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class HeaderComponent implements AfterViewChecked {
  public isMobileMenuOpen: boolean = false;

  constructor(private _window: Window) {}

  public ngAfterViewChecked(): void {
    this._handleBodyOverflow();
  }
  
  public toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  
  public closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
  
  private _handleBodyOverflow() {
    this._window.document.body.style.overflow = this.isMobileMenuOpen ? "hidden" : "auto";
  }
}
