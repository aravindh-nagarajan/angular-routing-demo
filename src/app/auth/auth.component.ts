import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  public authLevels: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.setLevels();
  }

  setLevels() {
    this.authLevels = this.authService.getAuthLevels();
  }

  updateAuthLevel(level: string) {
    this.authService.updateAuthLevel(level);
  }
}
