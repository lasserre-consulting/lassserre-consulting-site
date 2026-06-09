import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-a11y-toggle',
  standalone: true,
  templateUrl: './a11y-toggle.html',
  styleUrl: './a11y-toggle.css'
})
export class A11yToggle implements OnInit {
  private platformId = inject(PLATFORM_ID);
  active = false;

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.active = localStorage.getItem('a11y-mode') === 'on';
      this.apply();
    }
  }

  toggle() {
    this.active = !this.active;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('a11y-mode', this.active ? 'on' : 'off');
    }
    this.apply();
  }

  private apply() {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.classList.toggle('a11y-mode', this.active);
    }
  }
}
