import { Component, OnInit } from '@angular/core';
import {Category} from '../../../../models/category.model';
import {NgForm} from '@angular/forms';
import {ProductsService} from '../../../../services/products.service';

@Component({
  selector: 'app-admin-category-input',
  templateUrl: './admin-category-input.component.html',
  styleUrls: ['./admin-category-input.component.scss']
})
export class AdminCategoryInputComponent implements OnInit {
  category: Category = {categorynumber: -1, categoryname: '', previouscategorynumber: -1};
  categories: Category[] = [];
  supercategories: Category[] = [];
  editing = false;
  noPreviousCategory = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.categories.subscribe(categories => {
      this.categories = [];
      this.supercategories = [];
      categories.forEach(category => {
        if (category.categorynumber !== this.category.previouscategorynumber) {
          this.categories.push(category);
          this.supercategories.push(category);
        }
      });
    });
    this.productsService.getCategories();
  }

  saveInput(form: NgForm): void {
    this.category.categoryname = form.value.name;
    if (form.value.previouscategory > 0) {
      this.category.previouscategorynumber = form.value.previouscategory;
    } else if (this.category.previouscategorynumber < 0) {
      this.noPreviousCategory = true;
      return;
    }

    if (this.category.categorynumber > 0) {
      this.productsService.updateCategory(this.category);
    } else {
      this.productsService.createCategory(this.category);
    }
    this.resetInput();
  }

  resetInput(): void {
    this.editing = false;
    this.category = {categorynumber: -1, categoryname: '', previouscategorynumber: -1};
  }

}
