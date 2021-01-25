import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-shopping-basket-list',
  templateUrl: './shopping-basket-list.component.html',
  styleUrls: ['./shopping-basket-list.component.scss']
})
export class ShoppingBasketListComponent implements OnInit {
  shoppingCartList!: {amount: number, product: Product}[];

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.shoppingCartList = this.shoppingCartService.products;
  }

}
