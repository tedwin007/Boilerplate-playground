import { TestBed } from '@angular/core/testing';

import { WidgetMangerService } from './widget-manger.service';

describe('WidgetMangerService', () => {
  let service: WidgetMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WidgetMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
