import { Component, OnInit, Inject } from '@angular/core';
import { IBook } from '../types/book';
import { ActivatedRoute } from '@angular/router';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [BookListService],
})
export class BookListComponent implements OnInit {
  books: IBook[];
  selectedBook: IBook = null;

  constructor(
    private bookListService: BookListService,
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(data => console.log(data));
  }

  ngOnInit() {
    this.setBooks();
  }

  onSelect(book: IBook) {
    this.selectedBook = book;
  }

  setBooks() {
    this.bookListService.getBooks()
      .subscribe(books => this.books = books);
  }
}
