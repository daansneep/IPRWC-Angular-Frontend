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

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: [
      { path: '', component: AdminProductComponent },
      { path: 'product', component: AdminProductComponent, children: [
          { path: '', component: AdminProductComponent },
          { path: 'create', component: AdminProductComponent },
          { path: 'edit/:id', component: AdminProductComponent }
        ]
      },
      { path: 'category', component: AdminCategoryComponent, children: [
          { path: '', component: AdminCategoryComponent },
          { path: 'create', component: AdminCategoryComponent },
          { path: 'edit/:id', component: AdminCategoryComponent }
        ] },
      { path: 'user', component: AdminUserComponent, children: [
          { path: '', component: AdminUserComponent },
          { path: 'create', component: AdminUserComponent },
          { path: 'edit/:id', component: AdminUserComponent }
        ] }
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
    AdminUserItemComponent
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
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
