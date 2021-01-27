import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductItemComponent } from './products-list/product-item/product-item.component';
import { ProductComponent } from './products-list/product-item/product/product.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import { FilterItemComponent } from './products-filter/filter-item/filter-item.component';

const webshopRoutes: Routes = [
  { path: 'webshop', component: ProductsComponent },
  { path: 'webshop/product/:productid', component: ProductComponent }
];

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsFilterComponent,
        ProductsListComponent,
        ProductItemComponent,
        ProductComponent,
        FilterItemComponent
    ],
  exports: [
    ProductsComponent,
    ProductComponent
  ],
    imports: [
        RouterModule.forChild(webshopRoutes),
        CommonModule,
        SharedModule
    ]
})
export class ProductsModule { }
