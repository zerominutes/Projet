import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPatientsComponent} from './patients/list-patients/list-patients.component';
import {AddPatientComponent} from './patients/add-patient/add-patient.component';
import { HomeComponent } from './admin/home/home.component';
import { AddMedecinComponent } from './medecins/add-medecin/add-medecin.component';
import { ListMedecinsComponent } from './medecins/list-medecins/list-medecins.component';
import { AddRendezVousComponent } from './rendez-vous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './rendez-vous/list-rendez-vous/list-rendez-vous.component';
import { AddDossierComponent } from './dossiers/add-dossier/add-dossier.component';
import { ListDossiersComponent } from './dossiers/list-dossiers/list-dossiers.component';
import { AddConsultationComponent } from './consultations/add-consultation/add-consultation.component';
import { ListMedecinsPatientComponent } from './list-medecins-patient/list-medecins-patient.component';

const routes: Routes = [

  {path : 'list-patient', component: ListPatientsComponent},
  {path : 'list-medecins-patient', component: ListMedecinsPatientComponent},
  {path : 'new-patient' , component: AddPatientComponent},
  {path : '', component: HomeComponent, pathMatch: 'full'},
  {path : 'edit-patient/:id' , component: AddPatientComponent},
  {path : 'list-medecin', component: ListMedecinsComponent},
  {path : 'new-medecin' , component: AddMedecinComponent},
  {path : 'edit-medecin/:id' , component: AddMedecinComponent},
  {path : 'list-rendez-vous', component: ListRendezVousComponent},
  {path : 'new-rendez-vous' , component: AddRendezVousComponent},
  {path : 'edit-rendez-vous/:id' , component: AddRendezVousComponent},
  {path : 'list-dossiers', component: ListDossiersComponent},
  {path : 'new-dossier' , component: AddDossierComponent},
  {path : 'edit-dossier/:id' , component: AddDossierComponent},
  {path : 'edit-dossier/:id/edit-consultation/:consult_id' , component: AddConsultationComponent},
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
