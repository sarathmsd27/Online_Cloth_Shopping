import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionsService } from '../../../services/fashions.service';
import { Fashion } from '../../../shared/model/Fashion';
import { CartService } from '../../../services/cart.service';
import { Cart } from 'src/app/shared/model/cart';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{

   product!:Fashion
  
  constructor(activatedRoute:ActivatedRoute, private api:FashionsService,
     private cartService:CartService, private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params.id)
    api.getProductById(params.id).subscribe(serverProduct=>{
      this.product=serverProduct;
    })
   
  })
  }
ngOnInit(): void {
    
}
//Add cart button code
addToCart(){
  this.cartService.addToCart(this.product);
  this.router.navigateByUrl('/cart-page')
}
}
