import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import {Product} from '../../../models/product.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[]  = [];
  productSub = new Subscription();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productSub = this.productsService.products.subscribe(products => {
      products.forEach(product => {
        if (product.showinwebshop) {
          this.products.push(product);
        }
      });
    });
    this.productsService.getProducts();
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

}
