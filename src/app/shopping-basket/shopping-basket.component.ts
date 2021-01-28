import {Component, OnInit, ViewChild} from '@angular/core';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import {ShoppingBasketListComponent} from './shopping-basket-list/shopping-basket-list.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shopping-basket',
  templateUrl: './shopping-basket.component.html',
  styleUrls: ['./shopping-basket.component.scss']
})
export class ShoppingBasketComponent implements OnInit {
  userClearingShoppingBasket = false;
  totalPrice = this.shoppingCartService.totalPrice;
  @ViewChild(ShoppingBasketListComponent) shoppingList!: ShoppingBasketListComponent;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    this.shoppingCartService.priceSubject
      .subscribe(price => {
        this.totalPrice = price;
      });
  }

  onEmpty(): void {
    this.userClearingShoppingBasket = true;
  }



  close(): void {
    this.userClearingShoppingBasket = false;
  }

  closeConfirmation(): void {
    this.shoppingCartService.products = [];
    this.shoppingList.onEmptied();
    this.shoppingCartService.calculatePrice();
    this.userClearingShoppingBasket = false;
  }

  teapot(): void {
    window.location.href = 'https://www.google.com/teapot';
  }

}
