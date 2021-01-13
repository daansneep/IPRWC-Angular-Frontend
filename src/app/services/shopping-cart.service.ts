import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: { amount: number, product: Product}[] = [];

  constructor() { }

  addToCart(product: Product): void {
    let productAdded = false;
    this.products.forEach((entry: { amount: number, product: Product}) => {
      if (entry.product.id === product.id) {
        entry.amount++;
        productAdded = true;
      }
    });
    if (!productAdded) {
      this.products.push({amount: 1, product});
    }
  }
}
