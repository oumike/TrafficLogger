import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficlogsComponent } from './trafficlogs.component';

describe('TrafficlogsComponent', () => {
  let component: TrafficlogsComponent;
  let fixture: ComponentFixture<TrafficlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
