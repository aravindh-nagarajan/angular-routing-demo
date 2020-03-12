import { Injectable } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from '@angular/router';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log('LibraryGuard#canActivate called');

    const authLevel = this.authService.authLevel;

    if (authLevel !== 'default' && authLevel !== 'onlyLibrary') {
      console.warn('LibraryGuard#canActivate: Access denied');

      this.router.navigate(['/readers-club']);
    } else {
      console.log('LibraryGuard#canActivate: Access granted');

      return true;
    }
  }
}
