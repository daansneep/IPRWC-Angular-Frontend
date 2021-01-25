import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import { Product } from '../models/product.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new Subject<Product[]>();

  constructor(private daoService: DaoService) { }

  getProducts(): void {
    this.daoService.sendGetRequest('/webshop/products')
      .subscribe(res => {
        this.products.next(res.products);
      });
  }
}
