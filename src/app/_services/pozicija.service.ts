import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pozicija } from '../_model/pozicija';

@Injectable({
  providedIn: 'root'
})
export class PozicijaService {
  baseUrl = environment.apiUrl + 'pozicija/';
  pozicije: Pozicija[];

  constructor(private http: HttpClient) {}

  getAll(): Observable<Pozicija[]> {
    return this.http.get<Pozicija[]>(this.baseUrl);
  }

  getById(id: number): Observable<Pozicija> {
    return this.http.get<Pozicija>(this.baseUrl + id);
  }

  setPozicije(pozicije: Pozicija[]){
    this.pozicije = pozicije;
  }

  getPozicije(){
    return this.pozicije;
  }

}
