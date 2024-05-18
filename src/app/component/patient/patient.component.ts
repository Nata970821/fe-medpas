import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {title = 'fe-medpass';

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

constructor(public globalService: GlobalService, private authService: AuthService) {

  this.patient.id = authService.user.id;
  this.getPatient();
}

/**
 * Sirve para agregar un paciente
 */
addPacient() {
  this.globalService
    .request('addpatient', 'post', this.patient)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para obtener información de un paciente
 */
getPatient() {
  this.globalService
    .request(`getpatient/${this.patient.id}`, 'get')
    .subscribe((res) => {
      if (res.message) {
        alert(res.message);
      }

      if (res?.data?.id) {
        res.data.fecha_nacimiento = res.data.fecha_nacimiento.split('T')[0];
        this.mode = 'edit';
      }
      this.patient = res.data;
    });
}

/**
 * Sirve para actualizar información de un paciente
 */
updatePacient() {
  this.globalService
    .request('updatePatient', 'patch', this.patient)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para limpiar los campos del formulario
 */
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

/**
 * Sirve para borrar la informacion de un paciente
 */
deletePacient() {
  this.globalService
  .request(`deletePatient/${this.patient.id}`, 'delete')
    .subscribe((res) => {
      alert(res.message);
      this.clear();
    });
    
}
}
