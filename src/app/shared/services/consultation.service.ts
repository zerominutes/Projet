import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Consultation} from '../model/consultation';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class ConsultationService {
private url = environment.baseUrl + '/consultation';
  consultations: Consultation[];
  consultation: Consultation;
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<Consultation[]> {
    return this.httpClient.get<Consultation[]>(this.url);
  }

  public save(consultation: Consultation): Observable<any>{
    return this.httpClient.post(this.url, Consultation);
  }

  public update(consultation: Consultation): Observable<any>{
    return this.httpClient.put(this.url, Consultation);
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id);
  }
  findById(id){
    this.getAll()
      .subscribe(data => {
        this.consultations = data;
        for (let r of this.consultations){
          if (r.id==id){
            this.consultation=r;
          }
        }
      }, err => {
        console.log(err);
      });
    }

}