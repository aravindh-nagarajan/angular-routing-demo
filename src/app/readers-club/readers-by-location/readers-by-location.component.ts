import { Component, OnInit } from '@angular/core';
import { IReader } from './../types/reader';
import { ReaderListService } from '../reader-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-readers-by-location',
  templateUrl: './readers-by-location.component.html',
  styleUrls: ['./readers-by-location.component.css']
})
export class ReadersByLocationComponent implements OnInit {
  public readers: IReader[];
  public locationParam: string;

  constructor(
    private readerListService: ReaderListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.locationParam = this.route.snapshot.paramMap.get('location');

    this.setReaders();
  }

  setReaders() {
    this.readerListService.getReadersByLocation(this.locationParam)
      .subscribe(readers => this.readers = readers);
  }

}
