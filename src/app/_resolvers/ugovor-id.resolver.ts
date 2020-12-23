import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ugovor } from '../_model/ugovor';
import { Zaposleni } from '../_model/zaposleni';
import { AlertifyService } from '../_services/alertify.service';
import { UgovorService } from '../_services/ugovor.service';
import { ZaposleniService } from '../_services/zaposleni.service';

@Injectable()
export class UgovorIdResolver implements Resolve<Ugovor>{

    constructor(private ugovorService: UgovorService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Ugovor>{
        return this.ugovorService.getById(route.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}