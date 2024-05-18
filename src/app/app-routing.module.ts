import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { PatientComponent } from './component/patient/patient.component';
import { MedicineComponent } from './component/medicamento/medicine.component';
import { DiseaseComponent } from './component/disease/disease.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'disease',
    component: DiseaseComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
