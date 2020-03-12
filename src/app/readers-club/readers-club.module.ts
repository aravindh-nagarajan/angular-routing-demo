import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadersClubRoutingModule } from './readers-club-routing.module';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReadersByLocationComponent } from './readers-by-location/readers-by-location.component';
import { LocationsComponent } from './locations/locations.component';
import { ReadersClubComponent } from './readers-club/readers-club.component';

@NgModule({
  declarations: [
    ReaderListComponent,
    ReaderDetailComponent,
    ReadersByLocationComponent,
    LocationsComponent,
    ReadersClubComponent,
  ],
  imports: [
    CommonModule,
    ReadersClubRoutingModule
  ],
  exports: [
    ReaderListComponent,
    ReaderDetailComponent,
  ]
})
export class ReadersClubModule { }
