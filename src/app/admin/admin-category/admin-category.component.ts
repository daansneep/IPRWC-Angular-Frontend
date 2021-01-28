import {Component, OnInit, ViewChild} from '@angular/core';
import {Category} from '../../../models/category.model';
import {AdminCategoryInputComponent} from './admin-category-input/admin-category-input.component';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.scss']
})
export class AdminCategoryComponent implements OnInit {

  @ViewChild(AdminCategoryInputComponent) categoryInput: AdminCategoryInputComponent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(event: Category): void {
    if (this.categoryInput) {
      this.categoryInput.category = event;
      this.categoryInput.supercategories = [];
      this.categoryInput.supercategories = this.categoryInput.categories.filter(category => {
        return category.categorynumber !== event.categorynumber;
      });
      this.categoryInput.editing = true;
    }
  }

}
