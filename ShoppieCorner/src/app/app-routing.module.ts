import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login/login.component';


const routes: Routes = [
 
  {
      path:"home", component:HomeComponent
  },

{
  path:"search/:searchTerm", component:HomeComponent
},

 {
      path:"tag/:tag", component:HomeComponent
  },
  {
    path:'fashion/:id',component:ProductPageComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'login',component:LoginComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
