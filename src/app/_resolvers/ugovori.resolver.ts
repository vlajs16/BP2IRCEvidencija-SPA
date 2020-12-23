import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ugovor } from '../_model/ugovor';
import { AlertifyService } from '../_services/alertify.service';
import { UgovorService } from '../_services/ugovor.service';

@Injectable()
export class UgovoriResolver implements Resolve<Ugovor[]>{

    constructor(private ugovoriService: UgovorService,
                private router: Router, private alertify: AlertifyService){}

    resolve(): Observable<Ugovor[]>{
        return this.ugovoriService.getAll().pipe(
            catchError(error => {
                this.alertify.error('Problem prilikom učitavanja podataka');
                this.router.navigate(['/']);
                return of(null);
            })
        )
    }
}