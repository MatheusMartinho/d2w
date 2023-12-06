import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacksDataCenterComponent } from './racks-data-center.component';

describe('RacksDataCenterComponent', () => {
  let component: RacksDataCenterComponent;
  let fixture: ComponentFixture<RacksDataCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RacksDataCenterComponent]
    });
    fixture = TestBed.createComponent(RacksDataCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
