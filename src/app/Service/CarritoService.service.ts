import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {
  private cart: IProduct[] = [];

  constructor() { }

  addToCart(product: IProduct) {
    this.cart.push(product);
  }

  getCart(): IProduct[] {
    return this.cart;
  }

  removeFromCart(id: number) {
    this.cart = this.cart.filter(item => item.id !== id);
  }

  removeAll(){
    this.cart  = [];
  }



}
