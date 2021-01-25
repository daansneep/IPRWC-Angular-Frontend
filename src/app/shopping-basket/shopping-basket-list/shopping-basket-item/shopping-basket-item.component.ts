import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-shopping-basket-item',
  templateUrl: './shopping-basket-item.component.html',
  styleUrls: ['./shopping-basket-item.component.scss']
})
export class ShoppingBasketItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() amount!: number;

  constructor() {}

  ngOnInit(): void {}

}
