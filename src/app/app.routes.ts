import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    {path : '', component : HomeComponent},
    {path : 'about', component : AboutUsComponent},
    {path : 'services', component : ServicesComponent},
    {path : 'products', component : ProductsComponent}
];
