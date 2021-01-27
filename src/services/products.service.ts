import { Injectable } from '@angular/core';
import { DaoService } from './dao.service';
import { Product } from '../models/product.model';
import {Observable, Subject} from 'rxjs';
import {Category} from '../models/category.model';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = new Subject<Product[]>();
  categories = new Subject<Category[]>();
  categoryArray: Category[] = [];
  currentCategory = new Subject<Category>();

  constructor(private daoService: DaoService, private userService: UserService) {
    this.categories.subscribe(categories => {
      this.categoryArray = [];
      categories.forEach(category => {
        this.categoryArray.push(category);
      });
    });
  }

  getProducts(): void {
    this.daoService.sendGetRequest('/webshop/products')
      .subscribe(res => {
        this.products.next(res.products);
      });
  }

  getProductById(id: number): Observable<Product> {
    return this.daoService.sendGetRequest(`/webshop/product/${id}`);
  }

  createProduct(product: Product): void {
    if (this.userService.user) {
      this.daoService.sendPostRequest('/webshop/product/create', product, this.userService.user.token)
        .subscribe(() => {
          this.getProducts();
        });
    }
  }

  updateProduct(product: Product): void {
    if (this.userService.user) {
      this.daoService.sendPutRequest('/webshop/product/update', product, this.userService.user.token)
        .subscribe(() => {
        this.getProducts();
      });
    }
  }

  deleteProduct(id: number): void {
    if (this.userService.user) {
      this.daoService.sendDeleteRequest(`/webshop/product/delete/${id}`, this.userService.user.token)
        .subscribe(() => {
          this.getProducts();
        });
    }
  }

  getCategories(): void {
    this.daoService.sendGetRequest('/webshop/categories')
      .subscribe(res => {
        this.categories.next(res.categories);
      });
  }

  createCategory(category: Category): void {
    if (this.userService.user) {
      this.daoService.sendPostRequest('/webshop/category/create', category, this.userService.user.token)
        .subscribe(() => {
          this.getCategories();
        });
    }
  }

  updateCategory(category: Category): void {
    if (this.userService.user) {
      this.daoService.sendPutRequest('/webshop/category/update', category, this.userService.user.token)
        .subscribe(() => {
          this.getCategories();
        });
    }
  }

  deleteCategory(id: number): void {
    if (this.userService.user) {
      this.daoService.sendDeleteRequest(`/webshop/category/delete/${id}`, this.userService.user.token)
        .subscribe(() => {
          this.getCategories();
        });
    }
  }
}
