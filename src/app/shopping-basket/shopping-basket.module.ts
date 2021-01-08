import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketComponent } from './shopping-basket.component';
import { ShoppingBasketListComponent } from './shopping-basket-list/shopping-basket-list.component';
import { ShoppingBasketItemComponent } from './shopping-basket-list/shopping-basket-item/shopping-basket-item.component';
import {RouterModule, Routes} from '@angular/router';

const shoppingBasketRoutes: Routes = [
  { path: 'shopping-basket', component: ShoppingBasketComponent }
];

@NgModule({
    declarations: [
        ShoppingBasketComponent,
        ShoppingBasketListComponent,
        ShoppingBasketItemComponent
    ],
    exports: [
        ShoppingBasketComponent
    ],
    imports: [
      RouterModule.forChild(shoppingBasketRoutes),
      CommonModule
    ]
})
export class ShoppingBasketModule { }
