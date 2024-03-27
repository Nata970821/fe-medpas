import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'fe-medpass';

  patient = {
    id: '',
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    direccion: '',
    barrio: '',
    telefono: '',
  };

  mode = 'add';

  constructor(public globalService: GlobalService) {}

  addPacient() {
    this.globalService
      .request('addpatient', 'post', this.patient)
      .subscribe((res) => {
        alert(res.message);
      });
  }

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

  updatePacient() {
    this.globalService
      .request('updatePatient', 'patch', this.patient)
      .subscribe((res) => {
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
    };
    this.mode = 'add';
  }

  deletePacient() {
    this.globalService
    .request(`deletePatient/${this.patient.id}`, 'delete')
      .subscribe((res) => {
        alert(res.message);
        this.clear();
      });
      
  }
}
