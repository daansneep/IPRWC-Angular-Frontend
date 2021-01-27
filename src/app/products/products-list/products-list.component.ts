import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import {Product} from '../../../models/product.model';
import {Subscription} from 'rxjs';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  products: Product[]  = [];
  allProducts: Product[] = [];
  productSub = new Subscription();
  categories: Category[] = [];
  orderedSuperList: Category[] = [];
  orderedSubList: number[] = [];
  currentCategory: Category = {categorynumber: -1, categoryname: '', previouscategorynumber: -1};

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productSub = this.productsService.products.subscribe(products => {
      products.forEach(product => {
        if (product.showinwebshop) {
          this.allProducts.push(product);
          this.products.push(product);
        }
      });
    });
    this.productsService.getProducts();
    this.productsService.categories.subscribe(categories => {
      this.categories = [];
      categories.forEach(category => {
        this.categories.push(category);
        if (category.previouscategorynumber === null) {
          this.currentCategory = category;
        }
      });
    });
    this.productsService.getCategories();
    this.productsService.currentCategory.subscribe(category => {
      this.orderedSuperList = [];
      this.orderedSubList = [];
      this.currentCategory = category;
      this.recFillOrderedSuperList(category);
      this.orderedSuperList.reverse();
      this.recFullOrderedSubList(category);
      this.filterProductsOnCategories();
    });
  }

  filterProductsOnCategories(): void {
    this.products = this.allProducts.filter(product => {
      return this.orderedSubList.includes(product.categorynumber);
    });
  }

  recFullOrderedSubList(category: Category): void {
    this.orderedSubList.push(category.categorynumber);
    this.categories.forEach(categoryInList => {
      if (categoryInList.previouscategorynumber === category.categorynumber) {
        return this.recFullOrderedSubList(categoryInList);
      } else {
        return;
      }
    });
  }

  recFillOrderedSuperList(category: Category): void {
    this.orderedSuperList.push(category);
    if (category.previouscategorynumber === null) {
      return;
    } else {
      this.categories.forEach(categoryInList => {
        if (category.previouscategorynumber === categoryInList.categorynumber) {
          return this.recFillOrderedSuperList(categoryInList);
        } else {
          return;
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

}
