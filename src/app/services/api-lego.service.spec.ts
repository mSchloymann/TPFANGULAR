import { TestBed } from '@angular/core/testing';

import { ApiLegoService } from './api-lego.service';

describe('ApiLegoService', () => {
  let service: ApiLegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
