import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../../models/category.model';
import {ProductsService} from '../../../../services/products.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
  @Input() category: Category = {categorynumber: -1, categoryname: '', previouscategorynumber: -1};
  subCategories: Category[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.categoryArray.forEach(category => {
      if (category.previouscategorynumber === this.category.categorynumber) {
        this.subCategories.push(category);
      }
    });
  }

  setCurrentCategory(): void {
    this.productsService.currentCategory.next(this.category);
  }
}
