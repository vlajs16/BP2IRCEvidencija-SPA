import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Zaposleni } from '../_model/zaposleni';
import { AlertifyService } from '../_services/alertify.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class ZaposleniIdResolver implements Resolve<Zaposleni>{

    constructor(private zaposleniService: ZaposleniService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Zaposleni>{
        return this.zaposleniService.getById(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}