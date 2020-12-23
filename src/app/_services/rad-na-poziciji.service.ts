import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RadNaPoziciji } from '../_model/rad-na-poziciji';

@Injectable({
  providedIn: 'root'
})
export class RadNaPozicijiService {
  baseUrl = environment.apiUrl + 'radnapoziciji/';

  constructor(private http: HttpClient) {}

  insert(rnp: RadNaPoziciji): Observable<any>{
    return this.http.post<any>(this.baseUrl, rnp);
  }

  update(rnp: RadNaPoziciji){
    return this.http.put(this.baseUrl, rnp);
  }

  getById(sifraZap: number, sifraPoz: number, datumOd: Date):Observable<RadNaPoziciji>{
    const rad: RadNaPoziciji = { 
      sifraZaposlenog: sifraZap,
      sifraPozicije: sifraPoz,
      datumOd: datumOd
    };

    return this.http.put<RadNaPoziciji>(this.baseUrl + 'id/', rad);
  }

}
