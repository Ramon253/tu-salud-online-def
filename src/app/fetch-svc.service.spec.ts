import { TestBed } from '@angular/core/testing';

import { FetchSvcService } from './fetch-svc.service';

describe('FetchSvcService', () => {
  let service: FetchSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
