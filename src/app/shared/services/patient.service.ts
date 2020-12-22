import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Patient} from '../model/patient';
import {environment} from '../../../environments/environment';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})


export class PatientService {
private url = environment.baseUrl + '/patient';
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(this.url);
  }

  public save(patient: Patient): Observable<any>{
    return this.httpClient.post(this.url, patient);
  }

  public update(patient: Patient): Observable<any>{
    return this.httpClient.put(this.url, patient);
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id);
  }
  public findById(id): Observable<Patient>{
    return this.httpClient.get<Patient>(this.url + '/' + id);
  }

}
