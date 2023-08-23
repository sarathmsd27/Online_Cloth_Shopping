import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Fashion } from '../shared/model/Fashion';
import { CartItem } from '../shared/model/Cartitem';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cart:Cart = new Cart();

  //subject behaviour rxjs concept

  private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  
  constructor() { } 

  //Add to cart method

  addToCart(product:Fashion):void{
    let cartItem= this.cart.items.find(item=>item.product.id===product.id)
    if(cartItem)
    return;
   
   this.cart.items.push(new CartItem(product))
   this.setCartToLocalStorage();
  }
  //Remove cart item
  removeFromCart(productId:string):void{
    this.cart.items=this.cart.items.filter(item=>item.product.id != productId)
     this.setCartToLocalStorage();
  }

  //change quantity
   changeQuantity(productId:string,quantity:number){
    let cartItem = this.cart.items.find(item=>item.product.id===productId)
    if(!cartItem)
    return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.product.price;
     this.setCartToLocalStorage();
   }

   //clear Cart
   clearCart(){
      this.cart = new Cart();
      this.setCartToLocalStorage();
   }
   
   //get cart obervables means check observable data
   getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
   }
      
   //now set localstorage data
   private setCartToLocalStorage():void{
    this.cart.totalPrice=this.cart.items.reduce((prevSum, currentItem)=>
    prevSum + currentItem.price,0);
    this.cart.totalCount=this.cart.items.reduce((prevSum,currentItem)=>
    prevSum+currentItem.quantity,0)

    const cartJson = JSON.stringify(this.cart)
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart);
   }

//whenever set localstorage data then also get data

private getCartFromLocalStorage():Cart{
  const cartJson=localStorage.getItem('Cart');
  return cartJson?JSON.parse(cartJson):new Cart();
}

}
 