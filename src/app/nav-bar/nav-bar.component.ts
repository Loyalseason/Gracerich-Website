import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;  

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.changeNavbarStyleOnScroll);
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

  changeNavbarStyleOnScroll(): void {
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
