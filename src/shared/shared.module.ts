import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PopupComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    PopupComponent
  ]
})
export class SharedModule { }
