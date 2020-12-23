import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RadNaPoziciji } from '../_model/rad-na-poziciji';
import { AlertifyService } from '../_services/alertify.service';
import { RadNaPozicijiService } from '../_services/rad-na-poziciji.service';

@Injectable()
export class RadResolver implements Resolve<RadNaPoziciji>{

    constructor(private radService: RadNaPozicijiService,
                private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot): Observable<RadNaPoziciji>{
        return this.radService.getById(route.params['sifraZap'], route.params['sifraPoz'], route.params['datumOd']).pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}