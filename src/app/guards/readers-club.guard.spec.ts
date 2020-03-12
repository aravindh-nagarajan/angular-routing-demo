import { TestBed, async, inject } from '@angular/core/testing';

import { ReadersClubGuard } from './readers-club.guard';

describe('ReadersClubGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadersClubGuard]
    });
  });

  it('should ...', inject([ReadersClubGuard], (guard: ReadersClubGuard) => {
    expect(guard).toBeTruthy();
  }));
});
