import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PredlogProjekta } from '../_model/predlog-projekta';
import { Zaposleni } from '../_model/zaposleni';
import { AlertifyService } from '../_services/alertify.service';
import { PredlogService } from '../_services/predlog.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class PredlogIdResolver implements Resolve<PredlogProjekta>{

    constructor(private predlogService: PredlogService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<PredlogProjekta>{
        return this.predlogService.getById(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}