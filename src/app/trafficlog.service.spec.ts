import { TestBed } from '@angular/core/testing';

import { TrafficlogService } from './trafficlog.service';

describe('TrafficlogService', () => {
  let service: TrafficlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
