import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faShieldAlt, faCheckCircle, faHeadset, faClock, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface Feature {
  title: string;
  icon: any;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  slideInterval: any;
  itemsPerView = 3; // Default: Show 3 items

  features: Feature[] = [
    { icon: faStar, title: 'Quality' },
    // { icon: faShieldAlt, title: 'Integrity' },
    { icon: faCheckCircle, title: 'Accountability' },
    { icon: faHeadset, title: 'Customer Support' },
    { icon: faLightbulb, title: 'Innovation' },
    { icon: faClock, title: 'Reliability' }
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {

  }
}
