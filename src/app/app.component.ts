import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fe-medpass';

  constructor(public authService: AuthService, private router: Router) {
    let user = localStorage.getItem('user');

    if (user) {
      this.authService.user = JSON.parse(user);
    } else {
      this.router.navigate(['login']);
    }
  }
}
