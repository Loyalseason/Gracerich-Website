import { CommonModule } from '@angular/common';
import { Component  } from '@angular/core';

interface Service {
  iconClass: string;
  title: string;
  description: string;
}


@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      iconClass: 'fas fa-bread-slice text-yellow-700',
      title: 'Fresh Baked Products',
      description: 'Wide range of high-quality, nutritious baked goods produced daily.'
    },
    {
      iconClass: 'fas fa-shopping-bag text-orange-400',
      title: 'Bakery Ingredients',
      description: 'Comprehensive selection of premium ingredients for baking professionals and home bakers.'
    },
    {
      iconClass: 'fas fa-birthday-cake text-pink-500',
      title: 'Specialty Orders',
      description: 'Custom baking services for events, celebrations, and unique customer requirements.'
    },
    {
      iconClass: 'fas fa-industry text-blue-600',
      title: 'Bakery Production Services',
      description: 'Specialized flour milling and production support for bakeries and food businesses.'
    }
  ];
}