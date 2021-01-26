import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductInputComponent } from './admin-product-input.component';

describe('AdminProductInputComponent', () => {
  let component: AdminProductInputComponent;
  let fixture: ComponentFixture<AdminProductInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProductInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
