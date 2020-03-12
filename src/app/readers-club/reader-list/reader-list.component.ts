import { Component, OnInit, Inject } from '@angular/core';
import { IReader } from '../types/reader';
import { ReaderListService } from '../reader-list.service';

@Component({
  selector: 'app-reader-list',
  templateUrl: './reader-list.component.html',
  styleUrls: ['./reader-list.component.css'],
  providers: [ReaderListService],
})
export class ReaderListComponent implements OnInit {
  public readers: IReader[];

  constructor(private readerListService: ReaderListService) { }

  ngOnInit() {
    this.setReaders();
  }

  setReaders() {
    this.readerListService.getReaders()
      .subscribe(readers => this.readers = readers);
  }
}
