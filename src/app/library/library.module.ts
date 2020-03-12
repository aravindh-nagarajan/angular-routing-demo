import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListService } from './book-list.service';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  exports: [
    BookListComponent,
    BookDetailComponent,
  ]
})
export class LibraryModule { }
