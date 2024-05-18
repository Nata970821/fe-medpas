import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  constructor(public authService: AuthService, public router: Router) {

  }

  logOut() {
    this.authService.user = {};
    localStorage.removeItem('user');
    this.router.navigate(['login'])
  }

  /**
   * Sirve para redireccionar a la pagina
   * @param page 
   */
  goToPage(page: string) {
    this.router.navigate([page])
  }
}
