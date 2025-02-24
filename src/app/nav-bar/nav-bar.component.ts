import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  imports: []
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Bind the event handler to the component instance
      this.changeNavbarStyleOnScroll = this.changeNavbarStyleOnScroll.bind(this);
      
      // Add scroll event listener
      window.addEventListener('scroll', this.changeNavbarStyleOnScroll);
      
      // Check initial scroll position
      this.changeNavbarStyleOnScroll();
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.changeNavbarStyleOnScroll);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  private changeNavbarStyleOnScroll(): void {
    const navbar = document.getElementById("nav-bar");
    if (navbar) {
      if (window.scrollY > 10) {
        navbar.classList.add("bg-[#ff511a]", "shadow-lg");
        navbar.classList.remove("bg-transparent");
      } else {
        navbar.classList.remove("bg-[#ff511a]", "shadow-lg");
        navbar.classList.add("bg-transparent");
      }
    }
  }
}