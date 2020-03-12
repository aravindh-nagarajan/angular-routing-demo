import { ReadersClubGuard } from './../guards/readers-club.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReaderListComponent } from './reader-list/reader-list.component';
import { ReaderDetailComponent } from './reader-detail/reader-detail.component';
import { ReadersByLocationComponent } from './readers-by-location/readers-by-location.component';
import { LocationsComponent } from './locations/locations.component';
import { ReadersClubComponent } from './readers-club/readers-club.component';
import { ReadersGuard } from '../guards/readers.guard';
import { ReaderLocationsGuard } from '../guards/reader-locations.guard';
import { ReaderDetailResolverService } from './resolvers/reader-detail-resolver.service';

const appRoutes: Routes = [
  {
    path: 'readers-club',
    component: ReadersClubComponent,
    canActivate: [ReadersClubGuard],
    canActivateChild: [ReadersClubGuard],
    children: [
      {
        path: 'readers',
        component: ReaderListComponent,
        canActivate: [ReadersGuard],
      },
      {
        path: 'readers/:id',
        component: ReaderDetailComponent,
        canActivate: [ReadersGuard],
        resolve: {
          reader: ReaderDetailResolverService,
        }
      },
      {
        path: 'locations',
        component: LocationsComponent,
        canActivate: [ReaderLocationsGuard],
      },
      {
        path: 'locations/:location',
        component: ReadersByLocationComponent,
        canActivate: [ReaderLocationsGuard],
      },
      {
        path: '',
        redirectTo: 'readers',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ReadersClubRoutingModule { }
