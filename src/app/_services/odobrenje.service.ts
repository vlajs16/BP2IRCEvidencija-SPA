import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OdobrenjeProjekta } from '../_model/odobrenje-projekta';

@Injectable({
  providedIn: 'root'
})
export class OdobrenjeService {
  baseUrl = environment.apiUrl + 'odobrenje/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OdobrenjeProjekta[]> {
    return this.http.get<OdobrenjeProjekta[]>(this.baseUrl);
  }

  specific(): Observable<OdobrenjeProjekta[]> {
    return this.http.get<OdobrenjeProjekta[]>(this.baseUrl + 'specific');
  }

  getById(id: number): Observable<OdobrenjeProjekta> {
    return this.http.get<OdobrenjeProjekta>(this.baseUrl + id);
  }

  

  insert(odobrenje: OdobrenjeProjekta): Observable<any>{
    return this.http.post<any>(this.baseUrl, odobrenje);
  }

  update(id: number, odobrenje: OdobrenjeProjekta): Observable<any>{
    return this.http.put<any>(this.baseUrl + id, odobrenje);
  }

}
