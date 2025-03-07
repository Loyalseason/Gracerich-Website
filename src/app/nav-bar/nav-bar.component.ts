import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faInfoCircle, faCog, faEnvelope, faBreadSlice, faUsers, faStore, faHighlighter, faClipboardList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  imports: [CommonModule, FontAwesomeModule],
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isMenuOpen = false;
  isSidebarOpen = false;
  lastScrollY = 0;
  scrollTimeout: any = null;
  isNavbarVisible = true;
  
  // Navigation items matching your component structure
  navItems = [
    { selector: 'app-nav-bar', icon: faHome, label: 'Home' },
    { selector: 'app-products', icon: faBreadSlice, label: 'Products' },
    { selector: 'app-services', icon: faCog, label: 'Services' },
    { selector: 'app-about-us', icon: faInfoCircle, label: 'About Us' },
    { selector: 'app-contact-us', icon: faEnvelope, label: 'Contact' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  scrollToComponent(selector: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.closeSidebar();
      }
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.applyNavbarStyle();
      
      setTimeout(() => {
        this.applyNavbarStyle();
      }, 100);
      
      window.addEventListener('scroll', this.handleScroll);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.handleScroll);
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;  
  }

  handleScroll = () => {
    // Show navbar when scrolling starts
    this.showNavbar();
    
    // Apply navbar background style
    this.applyNavbarStyle();
    
    // Clear any existing timeout
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
    
    // Set a timeout to hide the navbar after scrolling stops
    this.scrollTimeout = setTimeout(() => {
      this.hideNavbar();
    }, 1500); // 1.5 seconds of inactivity before hiding
  };

  showNavbar(): void {
    const navbar = document.getElementById("nav-bar");
    if (navbar && !this.isNavbarVisible) {
      navbar.style.transform = "translateY(0)";
      this.isNavbarVisible = true;
    }
  }

  hideNavbar(): void {
    // Don't hide at the top of the page or when sidebar is open
    if (window.scrollY < 100 || this.isSidebarOpen) {
      return;
    }
    
    const navbar = document.getElementById("nav-bar");
    if (navbar && this.isNavbarVisible) {
      navbar.style.transform = "translateY(-100%)";
      this.isNavbarVisible = false;
    }
  }

  applyNavbarStyle(): void {
    const navbar = document.getElementById("nav-bar");

    if (navbar) {
      if (window.scrollY > 10) {
        navbar.style.backgroundColor = "rgba(255, 81, 26, 0.8)";
        navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navbar.style.boxShadow = "none";
      }
    }
  }
}