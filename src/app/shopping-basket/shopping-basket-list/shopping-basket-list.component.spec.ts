import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingBasketListComponent } from './shopping-basket-list.component';

describe('ShoppingBasketListComponent', () => {
  let component: ShoppingBasketListComponent;
  let fixture: ComponentFixture<ShoppingBasketListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingBasketListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingBasketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
