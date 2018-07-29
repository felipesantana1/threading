import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';


const routes: Routes = [
  {path:"", pathMatch:"full", component:HomeComponent},
  {path:"contact", pathMatch:"full", component:ContactComponent},
  {path:"services", pathMatch:"full", component:ServicesComponent},
  {path:"prices", pathMatch:"full", component:PricesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
