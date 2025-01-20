import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';

interface Product {
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  currentIndex = 0;
  
  products: Product[] = [
    {
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
      image: 'images/bakerybackground.jpg' // Replace with your image path
    },
    {
      title: 'Product 2',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      image: '/images/bakerybackground.jpg'
    },
    {
      title: 'Product 3',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.',
      image: '/images/bakerybackground.jpg'
    },
    {
      title: 'Product 4',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
      image: '/images/bakerybackground.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }

  previousSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.products.length - 1) {
      this.currentIndex++;
    }
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
  }
}
