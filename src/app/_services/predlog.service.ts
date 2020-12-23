import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PredlogProjekta } from '../_model/predlog-projekta';

@Injectable({
  providedIn: 'root',
})
export class PredlogService {
  baseUrl = environment.apiUrl + 'predlog/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PredlogProjekta[]> {
    return this.http.get<PredlogProjekta[]>(this.baseUrl);
  }

  getById(id: number): Observable<PredlogProjekta> {
    return this.http.get<PredlogProjekta>(this.baseUrl + id);
  }

  specific(): Observable<PredlogProjekta[]> {
    return this.http.get<PredlogProjekta[]>(this.baseUrl + 'specific');
  }

  filter(id: string): Observable<PredlogProjekta[]> {
    let searchParams = new HttpParams();
    if (id != undefined && id != null) {
      searchParams = searchParams.append('naziv', id);
    }

    return this.http.get<PredlogProjekta[]>(this.baseUrl + 'search/', {
      params: searchParams,
    });
  }

  insert(pred: PredlogProjekta): Observable<any> {
    return this.http.post<any>(this.baseUrl, pred);
  }

  update(id: number, pred: PredlogProjekta): Observable<any> {
    console.log(this.baseUrl + id);
    return this.http.put<any>(this.baseUrl + id, pred);
  }
}
