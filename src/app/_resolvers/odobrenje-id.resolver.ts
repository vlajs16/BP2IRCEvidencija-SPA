import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OdobrenjeProjekta } from '../_model/odobrenje-projekta';
import { PredlogProjekta } from '../_model/predlog-projekta';
import { Zaposleni } from '../_model/zaposleni';
import { AlertifyService } from '../_services/alertify.service';
import { OdobrenjeService } from '../_services/odobrenje.service';
import { PredlogService } from '../_services/predlog.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class OdobrenjeIdResolver implements Resolve<OdobrenjeProjekta>{

    constructor(private odobrenjeService: OdobrenjeService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<OdobrenjeProjekta>{
        return this.odobrenjeService.getById(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}