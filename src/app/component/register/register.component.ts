import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  title = 'fe-medpass';

  patient = {
    id: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    direccion: '',
    barrio: '',
    telefono: '',
    contrasena: '',
  };

  mode = 'add';

  constructor(public globalService: GlobalService, private router: Router) {}
/**
 * 
 */
  addPacient() {
    this.globalService
      .request('addpatient', 'post', this.patient)
      .subscribe((res) => {
        if (res.response) {
          this.router.navigate(['login']);
        } 
        alert(res.message);
      });
  }
  
  clear() {
    this.patient = {
      id: '',
      nombre: '',
      apellido: '',
      fecha_nacimiento: '',
      direccion: '',
      barrio: '',
      telefono: '',
      contrasena:'',
    };
    this.mode = 'add';
  }
}
