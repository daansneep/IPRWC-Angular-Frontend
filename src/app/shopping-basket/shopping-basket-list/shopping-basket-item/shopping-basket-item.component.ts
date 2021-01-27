import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import {ShoppingCartService} from '../../../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-basket-item',
  templateUrl: './shopping-basket-item.component.html',
  styleUrls: ['./shopping-basket-item.component.scss']
})
export class ShoppingBasketItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() amount!: number;

  constructor(private shoppingCartService: ShoppingCartService) {}

  ngOnInit(): void {}

  onAdd(): void {
    this.shoppingCartService.addToCart(this.product);
  }

  onRemove(): void {
    this.shoppingCartService.removeOneItem(this.product);
  }

}
