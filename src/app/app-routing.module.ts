import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { LibraryGuard } from './guards/library.guard';

const appRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  { path: '',
    redirectTo: '/library',
    pathMatch: 'full',
    canActivate: [LibraryGuard],
  }, // default route
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
