import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderLocationsGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log('ReaderLocationsGuard#canActivate called');

      const authLevel = this.authService.authLevel;

      if (authLevel === 'onlyReaders') {
        console.warn('ReaderLocationsGuard#canActivate: Access denied');

        this.router.navigate(['/readers-club/readers']);
      } else {
        console.log('ReaderLocationsGuard#canActivate: Access granted');

        return true;
      }
  }

}
