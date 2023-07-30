import { TestBed } from '@angular/core/testing';
import { IndexedDBService } from './indexed-db.service';

describe('IndexedDBService', () => {
  let service: IndexedDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexedDBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add and retrieve a value', async () => {
    const key = 'testKey';
    const value = 'testValue';
    service.add(key, value);
    const retrievedValue = await service.get(key);
    expect(retrievedValue).toEqual(value);
  });

  it('should delete a value', async () => {
    const key = 'testKey';
    const value = 'testValue';
    service.add(key, value);
    service.delete(key);
    const retrievedValue = await service.get(key);
    expect(retrievedValue).toBeUndefined();
  });
});
