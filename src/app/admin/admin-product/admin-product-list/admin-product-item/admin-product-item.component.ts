import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from '../../../../../models/product.model';

@Component({
  selector: 'app-admin-product-item',
  templateUrl: './admin-product-item.component.html',
  styleUrls: ['./admin-product-item.component.scss']
})
export class AdminProductItemComponent implements OnInit {
  @Input() product: Product | undefined;
  @Output() edit = new EventEmitter<Product>();
  @Output() deleted = new EventEmitter<number>();
  deleting = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(): void {
    this.edit.emit(this.product);
  }

  onDelete(): void {
    this.deleting = true;
  }

  close(): void {
    this.deleting = false;
  }

  closeConfirmation(): void {
    if (this.product) {
      this.deleted.emit(this.product.productnumber);
    }
    this.deleting = false;
  }
}
