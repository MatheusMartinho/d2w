import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W35Component } from './w35.component';

describe('W35Component', () => {
  let component: W35Component;
  let fixture: ComponentFixture<W35Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [W35Component]
    });
    fixture = TestBed.createComponent(W35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
