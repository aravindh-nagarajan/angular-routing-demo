import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { BookListService } from '../book-list.service';
import { IBook } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class BookDetailResolverService implements Resolve<IBook> {

  constructor(
    private bookService: BookListService,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBook> {
    const bookId = +route.paramMap.get('id');

    return this.bookService.getBook(bookId);
  }
}
