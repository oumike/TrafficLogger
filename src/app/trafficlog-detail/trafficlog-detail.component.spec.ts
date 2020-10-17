import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficlogDetailComponent } from './trafficlog-detail.component';

describe('TrafficlogDetailComponent', () => {
  let component: TrafficlogDetailComponent;
  let fixture: ComponentFixture<TrafficlogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficlogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficlogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
