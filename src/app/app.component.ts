import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OurStoryComponent } from "./our-story/our-story.component";
import { FeaturesComponent } from "./features/features.component";
import { ProductsComponent } from "./products/products.component";
import { ServicesComponent } from "./services/services.component";
import { FeaturesSecondaryComponent } from "./features-secondary/features-secondary.component";
// import { ProductsComponent } from "./products/products.component";
// import { AboutUsComponent } from "./about-us/about-us.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OurStoryComponent, FeaturesComponent, ProductsComponent, ServicesComponent, FeaturesSecondaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Seed-Website';
}
