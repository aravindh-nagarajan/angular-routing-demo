import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IBook } from '../types/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  public book: IBook;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.setBook();
  }

  setBook() {
    this.route.data
      // tslint:disable-next-line: deprecation
      .subscribe((data: { book: IBook }) => this.book = data.book);
  }

  goBack() {
    this.location.back();
  }
}
