import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-consultation',
  templateUrl: './add-consultation.component.html',
  styleUrls: ['./add-consultation.component.css']
})
export class AddConsultationComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params["id"] ;
    const consult_id = this.activatedRoute.snapshot.params["consult_id"] ;
    console.log("id:",id);
    console.log("consul:",consult_id);

  }

}
