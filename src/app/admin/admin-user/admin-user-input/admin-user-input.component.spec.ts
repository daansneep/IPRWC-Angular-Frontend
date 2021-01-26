import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserInputComponent } from './admin-user-input.component';

describe('AdminUserInputComponent', () => {
  let component: AdminUserInputComponent;
  let fixture: ComponentFixture<AdminUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
