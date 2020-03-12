import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IReader } from './types/reader';
import { readers } from './mock-data/mock-readers';

@Injectable({
  providedIn: 'root',
})
export class ReaderListService {
  constructor() { }

  getReaders(): Observable<IReader[]> {
    return of(readers);
  }

  getReader(id: number): Observable<IReader> {
    return of(readers.find(({ id: readerId }) => {
      return readerId === id;
    }));
  }

  getReadersByLocation(loc: string): Observable<IReader[]> {
    return of(readers.filter(({ location }) => {
      return location === loc;
    }));
  }

  getReaderLocations(): Observable<string[]> {
    return of(readers.map(({ location }) => {
      return location;
    }));
  }
}
