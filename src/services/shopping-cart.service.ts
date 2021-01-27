import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products: { amount: number, product: Product}[] = [];
  priceSubject = new Subject<number>();
  totalPrice = 0;

  constructor() {
  }

  addToCart(product: Product): void {
    let productAdded = false;
    this.products.forEach((entry: { amount: number, product: Product}) => {
      if (entry.product.productnumber === product.productnumber) {
        entry.amount++;
        productAdded = true;
      }
    });
    if (!productAdded) {
      this.products.push({amount: 1, product});
    }
    this.calculatePrice();
  }

  removeOneItem(product: Product): void {
    this.products.forEach((entry: { amount: number, product: Product}, index) => {
      if (entry.product.productnumber === product.productnumber) {
        entry.amount--;
        if (entry.amount < 1) {
          this.products.splice(index);
        }
      }
    });
    this.calculatePrice();
  }

  calculatePrice(): void {
    let totalPrice = 0;
    this.products.forEach(entry => {
      totalPrice += entry.amount * entry.product.saleprice;
    });
    this.priceSubject.next(totalPrice);
    this.totalPrice = totalPrice;
  }
}
