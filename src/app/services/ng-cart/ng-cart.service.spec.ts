import { TestBed } from '@angular/core/testing';

import { NgCartService } from './ng-cart.service';

describe('NgCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgCartService = TestBed.get(NgCartService);
    expect(service).toBeTruthy();
  });
});
