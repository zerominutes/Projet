import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatSelectModule} from '@angular/material/select';
import { from } from 'rxjs';

import { ListMedecinsComponent } from './medecins/list-medecins/list-medecins.component';
import { AdminPagingComponent } from './admin/admin-paging/admin-paging.component';
import { HomeComponent } from './admin/home/home.component';
import { AddMedecinComponent } from './medecins/add-medecin/add-medecin.component';
import { ListPatientsComponent } from './patients/list-patients/list-patients.component';
import { AddPatientComponent } from './patients/add-patient/add-patient.component';
import { AddRendezVousComponent } from './rendez-vous/add-rendez-vous/add-rendez-vous.component';
import { ListRendezVousComponent } from './rendez-vous/list-rendez-vous/list-rendez-vous.component';
import { AddConsultationComponent } from './consultations/add-consultation/add-consultation.component';
import { ListConsultationsComponent } from './consultations/list-consultations/list-consultations.component';
import { AddDossierComponent } from './dossiers/add-dossier/add-dossier.component';
import { ListDossiersComponent } from './dossiers/list-dossiers/list-dossiers.component';
import { ListMedecinsPatientComponent } from './list-medecins-patient/list-medecins-patient.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule , ToastContainerModule} from 'ngx-toastr';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMedecinsComponent,
    AdminPagingComponent,
    HomeComponent,
    AddMedecinComponent,
    ListPatientsComponent,
    AddPatientComponent,
    AddRendezVousComponent,
    ListRendezVousComponent,
    AddConsultationComponent,
    ListConsultationsComponent,
    AddDossierComponent,
    ListDossiersComponent,
    ListMedecinsPatientComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    ToastrModule.forRoot({timeOut:3000,
    positionClass:'toast-bottom-center',}),
    ToastContainerModule,
    BrowserAnimationsModule,
    ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger'}) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
