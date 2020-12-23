import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OdobrenjeProjekta } from '../_model/odobrenje-projekta';
import { Ugovor } from '../_model/ugovor';
import { AlertifyService } from '../_services/alertify.service';
import { OdobrenjeService } from '../_services/odobrenje.service';
import { UgovorService } from '../_services/ugovor.service';

@Injectable()
export class OdobrenjaResolver implements Resolve<OdobrenjeProjekta[]>{

    constructor(private odobrenjeService: OdobrenjeService,
                private router: Router, private alertify: AlertifyService){}

    resolve(): Observable<OdobrenjeProjekta[]>{
        return this.odobrenjeService.getAll().pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}