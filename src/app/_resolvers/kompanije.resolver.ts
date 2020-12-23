import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Kompanija } from '../_model/kompanija';
import { Zaposleni } from '../_model/zaposleni';
import { AlertifyService } from '../_services/alertify.service';
import { KompanijaService } from '../_services/kompanija.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class KompanijeResolver implements Resolve<Kompanija[]>{

    constructor(private kompanijaService: KompanijaService,
                private router: Router, private alertify: AlertifyService){}

    resolve(): Observable<Kompanija[]>{
        return this.kompanijaService.getAll().pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}