import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Category} from '../../../models/category.model';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss']
})
export class ProductsFilterComponent implements OnInit {
  subCategories: Category[] = [];
  category: Category = {categorynumber: -1, categoryname: '', previouscategorynumber: -1};

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.categories.subscribe(categories => {
      this.subCategories = [];
      categories.forEach(category => {
        if (category.previouscategorynumber === 1) {
          this.subCategories.push(category);
        } else if (category.previouscategorynumber === null) {
          this.category = category;
        }
      });
    });
    this.productsService.getCategories();
  }
  setCurrentCategory(): void {
    this.productsService.currentCategory.next(this.category);
  }
}
