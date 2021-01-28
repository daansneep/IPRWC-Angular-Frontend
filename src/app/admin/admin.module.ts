import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductListComponent } from './admin-product/admin-product-list/admin-product-list.component';
import { AdminProductItemComponent } from './admin-product/admin-product-list/admin-product-item/admin-product-item.component';
import { AdminCategoryListComponent } from './admin-category/admin-category-list/admin-category-list.component';
import { AdminCategoryItemComponent } from './admin-category/admin-category-list/admin-category-item/admin-category-item.component';
import { AdminUserListComponent } from './admin-user/admin-user-list/admin-user-list.component';
import { AdminUserItemComponent } from './admin-user/admin-user-list/admin-user-item/admin-user-item.component';
import { AdminProductInputComponent } from './admin-product/admin-product-input/admin-product-input.component';
import { PropertyComponent } from './admin-product/admin-product-input/property/property.component';
import {FormsModule} from '@angular/forms';
import { AdminUserInputComponent } from './admin-user/admin-user-input/admin-user-input.component';
import { AdminCategoryInputComponent } from './admin-category/admin-category-input/admin-category-input.component';
import {SharedModule} from '../../shared/shared.module';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
      { path: '', component: AdminProductComponent },
      { path: 'product', component: AdminProductComponent },
      { path: 'category', component: AdminCategoryComponent },
      { path: 'user', component: AdminUserComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminToolbarComponent,
    AdminUserComponent,
    AdminProductComponent,
    AdminCategoryComponent,
    AdminProductListComponent,
    AdminProductItemComponent,
    AdminCategoryListComponent,
    AdminCategoryItemComponent,
    AdminUserListComponent,
    AdminUserItemComponent,
    AdminProductInputComponent,
    PropertyComponent,
    AdminUserInputComponent,
    AdminCategoryInputComponent
  ],
  exports: [
    AdminComponent,
    AdminToolbarComponent,
    AdminProductComponent,
    AdminCategoryComponent,
    AdminUserComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
        FormsModule,
        SharedModule
    ]
})
export class AdminModule { }
