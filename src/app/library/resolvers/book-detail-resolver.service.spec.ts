import { TestBed } from '@angular/core/testing';

import { BookDetailResolverService } from './book-detail-resolver.service';

describe('BookDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookDetailResolverService = TestBed.get(BookDetailResolverService);
    expect(service).toBeTruthy();
  });
});
