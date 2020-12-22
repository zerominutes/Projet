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
term: string;
  medecinss=[
  {speciality:'généraliste',id:1,adresse:'fgyjdj',email:'lldjhg@gmail.com',nom:'test1',password:'', rdvs:[],consultations:[], username:''},
  {speciality:'généraliste',id:2,adresse:'jjjhhjjhkkj',email:'jhgh@gmail.com',nom:'test2',password:'',rdvs:[],consultations:[],username:''},
  {speciality:'généraliste',id:2,adresse:'jjjhhjjhkkj',email:'jhgh@gmail.com',nom:'test2',password:'',rdvs:[],consultations:[],username:''},
  {speciality:'généraliste',id:2,adresse:'jjjhhjjhkkj',email:'jhgh@gmail.com',nom:'test2',password:'',rdvs:[],consultations:[],username:''},
  {speciality:'dentiste',id:3,adresse:'jjjhhjjhkkj',email:'jhgh@gmail.com',nom:'test3',password:'',rdvs:[],consultations:[],username:''},
  {speciality:'dentiste',id:3,adresse:'jjjhhjjhkkj',email:'jhgh@gmail.com',nom:'test3',password:'',rdvs:[],consultations:[],username:''}];
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
