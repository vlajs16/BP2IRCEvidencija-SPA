import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Pozicija } from '../_model/pozicija';
import { AlertifyService } from '../_services/alertify.service';
import { PozicijaService } from '../_services/pozicija.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class PozicijeResolver implements Resolve<Pozicija[]>{

    constructor(private pozicijaService: PozicijaService,
                private router: Router, private alertify: AlertifyService){}

    resolve(): Observable<Pozicija[]>{
        return this.pozicijaService.getAll().pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}