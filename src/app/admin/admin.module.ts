import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminToolbarComponent } from './admin-toolbar/admin-toolbar.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { RouterModule, Routes } from '@angular/router';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin', component: AdminProductComponent, outlet: 'admin-toolbar' }
];

@NgModule({
  declarations: [
    AdminComponent,
    AdminToolbarComponent,
    AdminUserComponent,
    AdminProductComponent,
    AdminCategoryComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ]
})
export class AdminModule { }
