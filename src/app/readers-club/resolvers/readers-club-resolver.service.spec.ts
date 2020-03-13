import { TestBed } from '@angular/core/testing';

import { ReadersClubResolverService } from './readers-club-resolver.service';

describe('ReadersClubResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadersClubResolverService = TestBed.get(ReadersClubResolverService);
    expect(service).toBeTruthy();
  });
});
