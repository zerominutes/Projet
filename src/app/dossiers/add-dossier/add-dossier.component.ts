import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dossier } from 'src/app/shared/model/dossier';
import { Patient } from 'src/app/shared/model/patient';
import { DossierService } from 'src/app/shared/services/dossier.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-add-dossier',
  templateUrl: './add-dossier.component.html',
  styleUrls: ['./add-dossier.component.css']
})
export class AddDossierComponent implements OnInit {
  message: any;
  dossier=new Dossier();
  dossiers: Dossier[];
  consult_id=1;
  patient_id= new Patient();
  id;
  visible=true;
  patients: import("C:/Users/Mahdi/Desktop/Mahdi/DSI301/Projet d'integration/angular-app-develop/src/app/shared/model/patient").Patient[];
  constructor(
    private patientService : PatientService,
    private dossierService : DossierService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"] ;
    console.log("Doss id:",this.id);
    if(this.id != null){
      this.findById(this.id);
      this.visible = false;
    }
    this.findAllPatients();
  
  }

  public findAllPatients(){
    this.patientService.getAll()
      .subscribe(data => {
        this.patients = data;
        console.log("Pats:",this.patients);
      }, err => {
        console.log(err);
      });
    }
  findPatId(id){
      if(id !== null){
        this.patientService.findById(id).subscribe(res => {
          this.dossier.patient = res;
          console.log("Pat:",this.dossier.patient);
        }, err => {
          console.log(err);
        });
      }
    }
    findById(id){
      this.dossierService.getAll()
        .subscribe(data => {
          this.dossiers = data;
          for (let r of this.dossiers){
            if (r.id==id){
              this.visible = false;
              this.dossier=r;
              console.log("Dossier:",this.dossier);
              this.patient_id=this.dossier.patient;
              if (this.dossier==null){
                this.message="Something went wrong"
              }
            }
          }
        }, err => {
          console.log(err);
        });
      }

  ajouter() {
    console.log("Dossier to add:",this.dossier);
    this.dossierService.save(this.dossier).subscribe(res => {
        if (res.succes) {
         this.message="Success";
       //this.router.navigate(['/list-dossiers']);
       
        } else {
          this.message=res.message;
       this.router.navigate(['/list-dossiers']);
        }
      }, err => {
        this.message='not effected';
      }
    );

  }
 
  modifier() {
    this.dossierService.update(this.dossier).subscribe(res => {
        if (res.succes) {
          this.message=res.message;
          this.router.navigate(['/list-dossiers']);
        } else {
          this.message=res.message;
        }
      }, err => {
        this.message='not effected'
      }
    );

  }
}
