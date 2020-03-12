import { TestBed, async, inject } from '@angular/core/testing';

import { ReadersGuard } from './readers.guard';

describe('ReadersGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadersGuard]
    });
  });

  it('should ...', inject([ReadersGuard], (guard: ReadersGuard) => {
    expect(guard).toBeTruthy();
  }));
});
