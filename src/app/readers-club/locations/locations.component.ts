import { Component, OnInit } from '@angular/core';
import { ReaderListService } from '../reader-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  providers: [ReaderListService],
})
export class LocationsComponent implements OnInit {
  public locations: string[];

  constructor(
    private readerListService: ReaderListService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.setLocations();

    this.route.parent.data
      // tslint:disable-next-line: deprecation
      .subscribe(data => console.log(data));
  }

  setLocations() {
    this.readerListService.getReaderLocations()
      .subscribe(locations => this.locations = locations);
  }
}
