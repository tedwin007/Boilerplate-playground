import { TestBed } from '@angular/core/testing';

import { LocalStoreDbService } from './local-store-db.service';

describe('LocalStoreDbService', () => {
  let service: LocalStoreDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoreDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
