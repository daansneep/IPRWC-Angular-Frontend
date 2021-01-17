import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingBasketModule } from './shopping-basket/shopping-basket.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
        AuthModule,
        ProductsModule,
        ShoppingBasketModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
