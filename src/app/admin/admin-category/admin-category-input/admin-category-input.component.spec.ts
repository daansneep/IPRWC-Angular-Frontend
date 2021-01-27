import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryInputComponent } from './admin-category-input.component';

describe('AdminCategoryInputComponent', () => {
  let component: AdminCategoryInputComponent;
  let fixture: ComponentFixture<AdminCategoryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoryInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
