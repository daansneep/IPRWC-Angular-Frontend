import {Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ShoppingBasketListComponent} from './shopping-basket-list/shopping-basket-list.component';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
  totalPrice = this.shoppingCartService.totalPrice;
  @ViewChild(ShoppingBasketListComponent) shoppingList!: ShoppingBasketListComponent;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingCartService.priceSubject
      .subscribe(price => {
        this.totalPrice = price;
      });
  }

  onEmpty(): void {
    this.shoppingCartService.products = [];
    this.shoppingList.onEmptied();
    this.shoppingCartService.calculatePrice();
  }

}
