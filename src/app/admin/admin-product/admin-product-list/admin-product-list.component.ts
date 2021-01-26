import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ProductsService} from '../../../../services/products.service';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.scss']
})
export class AdminProductListComponent implements OnInit {
  products: Product[] = [];
  @Output() edit = new EventEmitter<Product>();

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.products = [];
      console.log('getting products');
      products.forEach(product => {
        this.products.push(product);
      });
      console.log(this.products);
    });
    this.productService.getProducts();
  }

  onEdit(event: Product): void {
    this.edit.emit(event);
  }

  onDeleted(event: number): void {
    this.productService.deleteProduct(event);
  }
}
