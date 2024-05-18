import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-medicine',
  templateUrl: './disease.component.html',
  styleUrl: './disease.component.scss'
})
export class DiseaseComponent {title = 'fe-medpass';

disease = {
  id: '',
  enfermedad: '',
  descripcion_enfermedad: '',
  
 
};

mode = 'add';

constructor(public globalService: GlobalService) {}

/**
 * Sirve para agregar una enfermdad
 */
addDisease() {
  this.globalService
    .request('adddisease', 'post', this.disease)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para obtener información de una enfermedad
 */
getDisease() {
  this.globalService
    .request(`getdisease/${this.disease.id}`, 'get')
    .subscribe((res) => {
      if (res.message) {
        alert(res.message);
      }

      if (res?.data?.id) {
        res.data.descripcion_enfermedad = res.data.descripcion_enfermedad.split('T')[0];
        this.mode = 'edit';
      }
      this.disease= res.data;
    });
}

/**
 * Sirve para actualizar información de una enfermdad
 */
updateDisease() {
  this.globalService
    .request('updateDisease', 'patch', this.disease)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para limpiar los campos del formulario
 */
clear() {
  this.disease = {
    id: '',
    enfermedad: '',
    descripcion_enfermedad: '',
    
   
  };
  this.mode = 'add';
}

/**
 * Sirve para borrar la informacion de una enfermedad
 */
deleteDisease() {
  this.globalService
  .request(`deleteDisease/${this.disease.id}`, 'delete')
    .subscribe((res) => {
      alert(res.message);
      this.clear();
    });
    
}
}
