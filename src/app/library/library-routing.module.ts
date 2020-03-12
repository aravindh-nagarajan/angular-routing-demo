import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LibraryGuard } from '../guards/library.guard';
import { BookDetailResolverService } from './resolvers/book-detail-resolver.service';

const appRoutes: Routes = [
  {
    path: 'library',
    component: BookListComponent,
    canActivate: [LibraryGuard],
  },
  {
    path: 'book/:id',
    component: BookDetailComponent,
    canActivate: [LibraryGuard],
    resolve: {
      book: BookDetailResolverService,
    }
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
export class LibraryRoutingModule { }
