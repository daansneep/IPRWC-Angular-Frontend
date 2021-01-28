import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import { Product } from '../../../../models/product.model';
import { Category } from '../../../../models/category.model';
import {ProductsService} from '../../../../services/products.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin-product-input',
  templateUrl: './admin-product-input.component.html',
  styleUrls: ['./admin-product-input.component.scss']
})
export class AdminProductInputComponent implements OnInit {
  @Input() product: Product = { productnumber: -1, title: '', description: '', imagepath: '', categorynumber: -1, purchaseprice: 0,
                                saleprice: 0, stock: 0, margin: 0, showinwebshop: false };

  categories: Category[] = [];
  properties: {property: string, value: string}[] = [];
  editing = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.categories
      .subscribe(categories => {
        this.categories = [];
        categories.forEach(category => {
          this.categories.push(category);
        });
      });
    this.productsService.getCategories();
    if (this.product.categorynumber > -1) {
      console.log('get all properties :)');
    }
  }

  resetInput(): void {
    this.editing = false;
    this.product = { productnumber: -1, title: '', description: '', imagepath: '', categorynumber: -1, purchaseprice: 0,
      saleprice: 0, stock: 0, margin: 0, showinwebshop: false };
  }

  saveInput(form: NgForm): void {
    this.product.title = form.value.title;
    this.product.description = form.value.desc;
    this.product.imagepath = form.value.imgpath;
    if (form.value.category !== '') {
      this.product.categorynumber = form.value.category;
    }
    this.product.purchaseprice = form.value.purchaseprice;
    this.product.saleprice = form.value.saleprice;
    this.product.stock = form.value.stock;

    this.product.showinwebshop = form.value.showinwebshop;
    this.product.margin = Math.round((1 - (this.product.purchaseprice * 1.21 / this.product.saleprice)) * 100);

    if (this.product.productnumber > -1) {
      this.productsService.updateProduct(this.product);
    } else {
      this.productsService.createProduct(this.product);
    }
    this.resetInput();
  }
}
