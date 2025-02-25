import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faInfoCircle, faCog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;  
  faHome = faHome;
  faInfo = faInfoCircle;
  faServices = faCog;
  faContact = faEnvelope;

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
