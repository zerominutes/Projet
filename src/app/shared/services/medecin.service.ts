import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medecin} from '../model/medecin';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MedecinService {
private url = environment.baseUrl + '/medecin';
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<Medecin[]> {
    return this.httpClient.get<Medecin[]>(this.url);
  }

  public save(medecin: Medecin): Observable<any>{
    return this.httpClient.post(this.url, medecin);
  }

  public update(medecin: Medecin): Observable<any>{
    return this.httpClient.put(this.url, medecin);
  }

  public delete(id: string): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id);
  }
  public findById(id: string): Observable<Medecin>{
    return this.httpClient.get<Medecin>(this.url + '/' + id);
  }

}
