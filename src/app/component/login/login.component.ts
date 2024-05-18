import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  title = 'fe-medpass';  

  patient = {  
    id: '',
    contrasena: '',
  };

  constructor(public globalService: GlobalService, public authService: AuthService, private router: Router) {

    

  }

  /**
   * Metodo que sirve para iniciar sesion
   */
  login() {
    this.globalService
      .request('login', 'post', this.patient)
      .subscribe((res) => {
        if (res.response) {
          localStorage.setItem('user', JSON.stringify(this.patient));
          this.authService.user = this.patient;
          this.router.navigate(['medicine']);
        } else {
          alert(res.message);
        }
        
      });
  }

  register() {
    this.router.navigate(['register']);
  }
}
