import { TestBed } from '@angular/core/testing';

import { Chardata } from './chardata';

describe('Chardata', () => {
  let service: Chardata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chardata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
