import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PredlogProjekta } from '../_model/predlog-projekta';
import { AlertifyService } from '../_services/alertify.service';
import { PredlogService } from '../_services/predlog.service';

@Injectable()
export class SpecificPredloziResolver implements Resolve<PredlogProjekta[]>{

    constructor(private predlogService: PredlogService,
                private router: Router, private alertify: AlertifyService){}

    resolve(): Observable<PredlogProjekta[]>{
        return this.predlogService.specific().pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}