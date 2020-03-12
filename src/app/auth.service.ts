import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';

const authLevels = [ {
    key: 'default',
    label: 'Default',
  }, {
    key: 'onlyLibrary',
    label: 'Only Library',
  }, {
    key: 'onlyReadersClub',
    label: 'Only Readers Club',
  }, {
    key: 'onlyReaders',
    label: 'Only Readers',
  }, {
    key: 'onlyReaderLocations',
    label: 'Only Reader Locations',
  }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authLevel = 'default';
  public level: BehaviorSubject<string> = new BehaviorSubject<string>(this.authLevel);

  constructor() { }

  updateAuthLevel(level) {
    this.authLevel = level;

    this.setCurrentAuthLevel();
  }

  setCurrentAuthLevel() {
    this.level.next(this.authLevel);
  }

  getCurrentAuthLevel() {
    return this.level.asObservable();
  }

  getAuthLevels() {
    return authLevels;
  }

  getAuthLevelLabel(level: string): string {
    return this.getAuthLevels().find(({ key }) => key === level).label;
  }
}
