import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../../../models/product.model';
import { Router } from '@angular/router';
import {ShoppingCartService} from '../../../../services/shopping-cart.service';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  clickedBuyPopup = false;
  isLoggedIn = false;

  constructor(private router: Router, private shoppingCartService: ShoppingCartService, private userService: UserService) {}

  ngOnInit(): void {}

  onClicked(): void {
    this.clickedBuyPopup = true;
  }

  closePopup(): void {
    this.clickedBuyPopup = false;
  }

  closePopupAndAdd(): void {
    this.clickedBuyPopup = false;
    if (this.userService.user) {
      this.shoppingCartService.addToCart(this.product);
    } else {
      this.router.navigate(['/sign-in-or-up']);
    }
  }

  closePopupAndLeave(): void {
    this.clickedBuyPopup = false;
    if (this.userService.user) {
      this.shoppingCartService.addToCart(this.product);
      this.router.navigate(['/shopping-basket']);
    } else {
      this.router.navigate(['/sign-in-or-up']);
    }
  }

}
