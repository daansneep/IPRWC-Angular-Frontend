import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Category} from '../../../../../models/category.model';

@Component({
  selector: 'app-admin-category-item',
  templateUrl: './admin-category-item.component.html',
  styleUrls: ['./admin-category-item.component.scss']
})
export class AdminCategoryItemComponent implements OnInit {
  @Input() category: Category = { categorynumber: -1, categoryname: '', previouscategorynumber: -1};
  @Output() edit = new EventEmitter<Category>();
  @Output() deleted = new EventEmitter<number>();
  deleting = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit(this.category);
  }

  onDelete(): void {
    this.deleting = true;
  }

  close(): void {
    this.deleting = false;
  }

  closeConfirmation(): void {
    this.deleting = false;
    this.deleted.emit(this.category.categorynumber);
  }
}
