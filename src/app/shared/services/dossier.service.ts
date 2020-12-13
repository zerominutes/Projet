import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Dossier} from '../model/dossier';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class DossierService {
private url = environment.baseUrl + '/DossierMedical';
  dossiers: Dossier[];
  constructor(private httpClient: HttpClient) { }
  public getAll(): Observable<Dossier[]> {
    return this.httpClient.get<Dossier[]>(this.url);
  }

  public save(dossier: Dossier): Observable<any>{
    return this.httpClient.post(this.url, dossier);
  }

  public update(dossier: Dossier): Observable<any>{
    return this.httpClient.put(this.url, dossier);
  }

  public delete(id): Observable<any>{
    return this.httpClient.delete(this.url + '/' + id);
  }
}