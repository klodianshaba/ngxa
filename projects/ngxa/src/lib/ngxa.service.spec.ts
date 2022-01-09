import { TestBed } from '@angular/core/testing';

import { NgxaService } from './ngxa.service';

describe('NgxaService', () => {
  let service: NgxaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
