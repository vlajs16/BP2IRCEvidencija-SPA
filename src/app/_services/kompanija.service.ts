import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Kompanija } from '../_model/kompanija';

@Injectable({
  providedIn: 'root'
})
export class KompanijaService {
  kompanije: Kompanija[];

  baseUrl = environment.apiUrl + 'kompanija/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Kompanija[]> {
    return this.http.get<Kompanija[]>(this.baseUrl);
  }

  getById(id: number): Observable<Kompanija> {
    return this.http.get<Kompanija>(this.baseUrl + id);
  }

  set(kompanije: Kompanija[]){
    this.kompanije = kompanije;
  }

  get(){
    return this.kompanije;
  }

}
