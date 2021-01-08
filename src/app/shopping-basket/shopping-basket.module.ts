import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketComponent } from './shopping-basket.component';
import { ShoppingBasketListComponent } from './shopping-basket-list/shopping-basket-list.component';
import { ShoppingBasketItemComponent } from './shopping-basket-list/shopping-basket-item/shopping-basket-item.component';

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
        CommonModule
    ]
})
export class ShoppingBasketModule { }
