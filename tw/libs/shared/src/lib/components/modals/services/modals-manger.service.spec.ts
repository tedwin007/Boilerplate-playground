import { TestBed } from '@angular/core/testing';

import { ModalsMangerService } from './modals-manger.service';

describe('ModalsMangerService', () => {
  let service: ModalsMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalsMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
