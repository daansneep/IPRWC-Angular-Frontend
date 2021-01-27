import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {Category} from '../../../../models/category.model';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.scss']
})
export class AdminCategoryListComponent implements OnInit {
  categories: Category[] = [];
  @Output() edit = new EventEmitter<Category>();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.categories.subscribe(categories => {
      this.categories = [];
      categories.forEach(category => {
        this.categories.push(category);
      });
    });
    this.productsService.getCategories();
  }

  onEdit(event: Category): void {
    this.edit.emit(event);
  }

  onDeleted(event: number): void {
    this.productsService.deleteCategory(event);
  }

}
