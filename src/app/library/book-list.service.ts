import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IBook } from './types/book';
import { books } from './mock-data/mock-books';

@Injectable({
  providedIn: 'root'
})
export class BookListService {
  constructor() { }

  getBooks(): Observable<IBook[]> {
    return of(books);
  }

  getBook(id: number): Observable<IBook> {
    return of(books.find(({ id: bookId }) => {
      return bookId === id;
    }));
  }
}
