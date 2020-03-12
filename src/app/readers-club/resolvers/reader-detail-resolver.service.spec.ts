import { TestBed } from '@angular/core/testing';

import { ReaderDetailResolverService } from './reader-detail-resolver.service';

describe('ReaderDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReaderDetailResolverService = TestBed.get(ReaderDetailResolverService);
    expect(service).toBeTruthy();
  });
});
