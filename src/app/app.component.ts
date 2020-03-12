import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'route-guard-demo-app';
  public currentAuthLevel: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
   this.setCurrentAuthlevel();
  }

  setCurrentAuthlevel() {
    this.authService.getCurrentAuthLevel().subscribe(level => {
      const currentAuthLevel = level;

      this.currentAuthLevel = this.authService.getAuthLevelLabel(currentAuthLevel);
    });
  }
}
