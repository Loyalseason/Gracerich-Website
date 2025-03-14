import { CommonModule } from '@angular/common';
import { Component, OnDestroy, AfterViewInit, NgZone } from '@angular/core';

interface Product {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit, OnDestroy {
  currentIndex = 0;
  autoSlideInterval: any;
  isPaused = false;

  products: Product[] = [
    { title: 'Product 1', description: 'Lorem ipsum dolor sit amet.', image: 'images/bakerybackground.jpg' },
    { title: 'Product 2', description: 'Duis aute irure dolor in reprehenderit.', image: 'images/bakerybackground.jpg' },
    { title: 'Product 3', description: 'Sed ut perspiciatis unde omnis iste natus.', image: 'images/bakerybackground.jpg' },
    { title: 'Product 4', description: 'Nemo enim ipsam voluptatem quia voluptas.', image: 'images/bakerybackground.jpg' }
  ];

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.clearAutoSlide();
  }

  startAutoSlide(): void {
    this.zone.runOutsideAngular(() => {
      this.autoSlideInterval = setInterval(() => {
        if (!this.isPaused) {
          this.zone.run(() => this.nextSlide());
        }
      }, 5000);
    });
  }  

  clearAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  pauseAutoSlide(): void {
    this.isPaused = true;
  }

  resumeAutoSlide(): void {
    this.isPaused = false;
  }

  previousSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.products.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.products.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
