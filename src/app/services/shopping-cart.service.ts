import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: { amount: number, product: Product}[] = [];

  constructor() { }

  addToCart(product: Product): void {
    if (this.products.length > 0) {
      let productAdded = false;
      product.forEach((entry: { amount: number, product: Product}) => {
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
}
