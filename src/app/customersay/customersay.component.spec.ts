import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersayComponent } from './customersay.component';

describe('CustomersayComponent', () => {
  let component: CustomersayComponent;
  let fixture: ComponentFixture<CustomersayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersayComponent]
    });
    fixture = TestBed.createComponent(CustomersayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
