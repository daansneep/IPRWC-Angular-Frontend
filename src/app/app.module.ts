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

@NgModule({
  declarations: [
    AppComponent,
    UserinfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    OrderingModule,
    AuthModule,
    ProductsModule,
    ShoppingBasketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
