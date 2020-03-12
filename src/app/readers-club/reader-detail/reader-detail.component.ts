import { Component, OnInit, Inject } from '@angular/core';
import { IReader } from '../types/reader';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reader-detail',
  templateUrl: './reader-detail.component.html',
  styleUrls: ['./reader-detail.component.css'],
})
export class ReaderDetailComponent implements OnInit {
  public reader: IReader;

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
      .subscribe((data: { reader: IReader }) => this.reader = data.reader);
  }

  goBack() {
    this.location.back();
  }

}
