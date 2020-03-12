import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { IReader } from '../types/reader';
import { ReaderListService } from '../reader-list.service';

@Injectable({
  providedIn: 'root'
})
export class ReaderDetailResolverService implements Resolve<IReader> {

  constructor(private readerListService: ReaderListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IReader> {
    const readerId = +route.paramMap.get('id');

    return this.readerListService.getReader(readerId);
  }
}
