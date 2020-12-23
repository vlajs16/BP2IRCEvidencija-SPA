import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ugovor } from '../_model/ugovor';

@Injectable({
  providedIn: 'root'
})
export class UgovorService {
  baseUrl = environment.apiUrl + 'ugovor/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ugovor[]> {
    return this.http.get<Ugovor[]>(this.baseUrl);
  }

  getById(id: number): Observable<Ugovor> {
    return this.http.get<Ugovor>(this.baseUrl + id);
  }

  insert(ugovor: Ugovor): Observable<any>{
    return this.http.post<any>(this.baseUrl, ugovor);
  }

  update(id:number, ugovor: Ugovor): Observable<any>{
    return this.http.put<any>(this.baseUrl + id, ugovor);
  }

  delete(id:number): Observable<any>{
    return this.http.delete<any>(this.baseUrl + id);
  }

  filter(dateFrom: any, dateTo?: any): Observable<Ugovor[]>{
    let params = new HttpParams();

    if(dateFrom != null){
      params = params.append('datumOd', dateFrom);
    }

    if(dateTo != null){
      params = params.append('datumDo', dateTo);
    }

    return this.http.get<Ugovor[]>(this.baseUrl + 'search/date', {params});
  }
}
