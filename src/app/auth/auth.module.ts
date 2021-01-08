import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from '@angular/router';

const authRoutes: Routes = [
  { path: 'sign-in-or-up', component: AuthComponent }
];

@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    imports: [
        RouterModule.forChild(authRoutes),
        CommonModule
    ]
})
export class AuthModule { }
