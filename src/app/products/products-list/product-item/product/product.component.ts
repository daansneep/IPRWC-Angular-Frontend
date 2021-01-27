import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../../../services/products.service';
import {Product} from '../../../../../models/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../../../services/user.service';
import {ShoppingCartService} from '../../../../../services/shopping-cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product!: Product;
  clickedBuyPopup = false;

  constructor(private productsService: ProductsService, private activatedRoute: ActivatedRoute, private userService: UserService,
              private shoppingCartService: ShoppingCartService, private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.productsService.getProductById(this.activatedRoute.params.value.productid)
      .subscribe(res => {
        this.product = res.product;
      });
  }

  onAddToCart(): void {
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
