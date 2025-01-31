import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-features-secondary',
  imports: [],
  templateUrl: './features-secondary.component.html',
  styleUrl: './features-secondary.component.css'
})
export class FeaturesSecondaryComponent  implements AfterViewInit {
  @ViewChild('imageContainer') imageContainer!: ElementRef;
  @ViewChild('contentContainer') contentContainer!: ElementRef;
  
  private isBrowser: boolean;
  private isMobileView: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.checkScreenSize();
      this.resetParallax();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isBrowser && !this.isMobileView) {
      this.updateParallax();
    }
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768; 
    this.resetParallax();
  }

  private resetParallax() {
    if (this.imageContainer) {
      this.imageContainer.nativeElement.style.transform = this.isMobileView ? 'none' : '';
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.checkScreenSize();
    }
  }

  private updateParallax() {
    if (!this.imageContainer || !this.contentContainer || this.isMobileView) return;

    const imageElement = this.imageContainer.nativeElement;
    const contentElement = this.contentContainer.nativeElement;
    
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const rect = imageElement.getBoundingClientRect();
    const containerTop = rect.top + scrollPosition;
    const containerHeight = imageElement.offsetHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const contentHeight = contentElement.offsetHeight;

    if (contentHeight > containerHeight) {
      if (scrollPosition > containerTop - viewportHeight && 
          scrollPosition < containerTop + containerHeight) {
        const parallaxOffset = (scrollPosition - (containerTop - viewportHeight)) * 0.3;
        imageElement.style.transform = `translateY(${Math.min(parallaxOffset, contentHeight - containerHeight)}px)`;
      }
    }
  }
}