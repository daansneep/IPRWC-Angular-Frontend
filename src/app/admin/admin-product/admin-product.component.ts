import {Component, OnInit, ViewChild} from '@angular/core';
import {AdminProductInputComponent} from './admin-product-input/admin-product-input.component';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {

  // @ts-ignore
  @ViewChild(AdminProductInputComponent) productInput: AdminProductInputComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(event: Product): void {
    this.productInput.product = event;
    this.productInput.editing = true;
  }
}
