import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/shared/model/medecin';
import { MedecinService } from 'src/app/shared/services/medecin.service';

import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-medecins-patient',
  templateUrl: './list-medecins-patient.component.html',
  styleUrls: ['./list-medecins-patient.component.css']
})
export class ListMedecinsPatientComponent implements OnInit {

  medecins: Medecin[];
  displayedColumns: string[] = ['id', 'name','username', 'adresse', 'email', 'speciality','actions'];
  dataSource: MatTableDataSource<Medecin>;
  message: any;
  
  constructor(
    private medecinService: MedecinService,
    private router: Router,
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {
  }

}
