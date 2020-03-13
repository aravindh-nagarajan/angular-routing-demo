import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReadersClubResolverService {


  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return of('From parent');
  }
}
