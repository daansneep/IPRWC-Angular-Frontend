import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import {ProductComponent} from '../product/product.component';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsFilterComponent,
        ProductsListComponent,
        ProductItemComponent,
        ProductComponent
    ],
    exports: [
        ProductsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProductsModule { }
