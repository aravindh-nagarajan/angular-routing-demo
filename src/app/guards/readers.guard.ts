import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReadersGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log('ReadersGuard#canActivate called');
      const authLevel = this.authService.authLevel;

      if (authLevel === 'onlyReaderLocations') {
        console.warn('ReadersGuard#canActivate: Access denied');

        this.router.navigate(['/readers-club/locations']);
      } else {
        console.log('ReadersGuard#canActivate: Access granted');

        return true;
      }
  }
}
