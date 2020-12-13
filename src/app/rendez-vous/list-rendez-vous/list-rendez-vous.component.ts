import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { RendezVous } from 'src/app/shared/model/rendez-vous';
import { RendezVousService } from 'src/app/shared/services/rendez-vous.service';

@Component({
  selector: 'app-list-rendez-vous',
  templateUrl: './list-rendez-vous.component.html',
  styleUrls: ['./list-rendez-vous.component.css']
})
export class ListRendezVousComponent implements OnInit {
  message: any;
  rdvs: RendezVous[]=[];
  rdv= new RendezVous();
  dataSource: MatTableDataSource<RendezVous>;
  displayedColumns: string[] = ['id', 'patient','medecin', 'maladie','date', 'time','detail','actions'];

  constructor(
    private rdvService: RendezVousService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  public findAll(){
    this.rdvService.getAll()
      .subscribe(data => {
        this.rdvs = data;
        console.log("In:",this.rdvs);
        console.log("data:",data);
      }, err => {
        console.log(err);
      });
    }
    
    
  ngOnInit() {
    
      this.findAll();
      console.log("After:",this.rdvs);
      
    }
  
    public supprimer(rdv){
          this.rdvService.delete(rdv.id).subscribe(
            data => {
              if (data.succes){
                this.message=data.message;
                console.log(data.message);
                this.findAll();
              }else{
                this.message=data.message;
                console.log(data.message);
              }
            }, error1 => {
              this.message='Opération non effectué';
              console.log(error1);
            }
          );
  
    }

}
