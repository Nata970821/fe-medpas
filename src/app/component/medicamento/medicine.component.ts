import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';


@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrl: './medicine.component.scss'
})
export class MedicineComponent {title = 'fe-medpass';

medicine = {
  id: '',
  medicamento: '',
  fecha_prescripcion: '', 
  dosis: '',
  instruccion_uso: '',
 
};

mode = 'add';

constructor(public globalService: GlobalService) {}

/**
 * Sirve para agregar un medicamento
 */
addMedicine() {
  this.globalService
    .request('addmedicine', 'post', this.medicine)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para obtener información de un medicamento
 */
getMedicine() {
  this.globalService
    .request(`getpatient/${this.medicine.id}`, 'get')
    .subscribe((res) => {
      if (res.message) {
        alert(res.message);
      }

      if (res?.data?.id) {
        res.data.fecha_prescripcion = res.data.fecha_prescripcion.split('T')[0];
        this.mode = 'edit';
      }
      this.medicine = res.data;
    });
}

/**
 * Sirve para actualizar información de un medicamento
 */
updateMedicine() {
  this.globalService
    .request('updateMedicine', 'patch', this.medicine)
    .subscribe((res) => {
      alert(res.message);
    });
}

/**
 * Sirve para limpiar los campos del formulario
 */
clear() {
  this.medicine = {
    id: '',
    medicamento: '',
    fecha_prescripcion: '',
    dosis: '',
    instruccion_uso: '',
   
  };
  this.mode = 'add';
}

/**
 * Sirve para borrar la informacion de un medicamento
 */
deleteMedicine() {
  this.globalService
  .request(`deleteMedicine/${this.medicine.id}`, 'delete')
    .subscribe((res) => {
      alert(res.message);
      this.clear();
    });
    
}
}
