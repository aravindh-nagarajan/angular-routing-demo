import { Component, OnInit } from '@angular/core';
import { ReaderListService } from '../reader-list.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [ReaderListService],
})
export class LocationsComponent implements OnInit {
  public locations: string[];

  constructor(private readerListService: ReaderListService) { }

  ngOnInit() {
    this.setLocations();
  }

  setLocations() {
    this.readerListService.getReaderLocations()
      .subscribe(locations => this.locations = locations);
  }
}
