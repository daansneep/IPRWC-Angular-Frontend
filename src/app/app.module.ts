import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { OrderingModule } from './ordering/ordering.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingBasketModule } from './shopping-basket/shopping-basket.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: UserinfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    OrderingModule,
    AuthModule,
    ProductsModule,
    ShoppingBasketModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
