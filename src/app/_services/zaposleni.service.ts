import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Zaposleni } from '../_model/zaposleni';

@Injectable({
  providedIn: 'root',
})
export class ZaposleniService {
  baseUrl = environment.apiUrl + 'zaposleni/';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Zaposleni[]> {
    return this.http.get<Zaposleni[]>(this.baseUrl);
  }

  getById(id: number): Observable<Zaposleni> {
    return this.http.get<Zaposleni>(this.baseUrl + id);
  }

  getByPosition(position: string): Observable<Zaposleni[]> {
    let searchParams = new HttpParams();

    if (position != null || position != undefined) {
      searchParams = searchParams.append('pozicija', position);
    }

    return this.http.get<Zaposleni[]>(this.baseUrl + 'search/', { params: searchParams });
  }
}
