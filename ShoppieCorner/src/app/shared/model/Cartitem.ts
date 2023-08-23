import { Fashion } from './Fashion';
export class CartItem{
    constructor(public product:Fashion){}
     quantity:number=1;
     price:number=this.product.price;
     

 
}