import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';

const authRoutes: Routes = [
  { path: 'sign-in-or-up', component: AuthComponent },
  { path: 'sign-in-or-up/admin', component: AdminAuthComponent }
];

@NgModule({
    declarations: [
        AuthComponent,
        AdminAuthComponent
    ],
    exports: [
        AuthComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(authRoutes),
        CommonModule
    ]
})
export class AuthModule { }
