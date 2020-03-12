import { TestBed, async, inject } from '@angular/core/testing';

import { ReaderLocationsGuard } from './reader-locations.guard';

describe('ReaderLocationsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReaderLocationsGuard]
    });
  });

  it('should ...', inject([ReaderLocationsGuard], (guard: ReaderLocationsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
