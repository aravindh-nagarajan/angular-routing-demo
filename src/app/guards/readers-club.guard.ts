import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
  CanActivateChild
} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReadersClubGuard implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('ReadersClubGuard#canActivate called');

    const authLevel = this.authService.authLevel;

    if (authLevel === 'onlyLibrary') {
      console.warn('ReadersClubGuard#canActivate: Access denied');

      this.router.navigate(['/library']);
    } else {
      console.log('ReadersClubGuard#canActivate: Access granted');

      return true;
    }
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('ReadersClubGuard#canActivateChild called');

    const authLevel = this.authService.authLevel;

    if (authLevel === 'default' || authLevel === 'onlyReadersClub' || authLevel === 'onlyReaders' || authLevel === 'onlyReaderLocations') {
      console.log('ReadersClubGuard#canActivateChild: Access granted');

      return true;
    } else {
      console.warn('ReadersClubGuard#canActivateChild: Access denied');

      this.router.navigate(['/library']);

    }

    return this.canActivate(route, state);
  }
}
