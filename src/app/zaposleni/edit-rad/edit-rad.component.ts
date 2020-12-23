import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Pozicija } from 'src/app/_model/pozicija';
import { RadNaPoziciji } from 'src/app/_model/rad-na-poziciji';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PozicijaService } from 'src/app/_services/pozicija.service';
import { RadNaPozicijiService } from 'src/app/_services/rad-na-poziciji.service';

@Component({
  selector: 'app-edit-rad',
  templateUrl: './edit-rad.component.html',
  styleUrls: ['./edit-rad.component.css']
})
export class EditRadComponent implements OnInit {
  statusi = [
    {
      bool: 'true',
      value: "Trenutna"
    },
    {
      bool: 'false',
      value: "Nije trenutna"
    }
  ];


  radForm: FormGroup;
  rad: RadNaPoziciji;
  oldRad: RadNaPoziciji;
  pozicije: Pozicija[];
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private rnpService: RadNaPozicijiService, private alertify: AlertifyService,
    private pozicijeService: PozicijaService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.oldRad = data['rad'];
    });

    this.pozicije = this.pozicijeService.getPozicije();
    this.createFormGroup();

    this.bsConfig = {
      containerClass: 'theme-blue',
      minDate: new Date(),
      isAnimated: true
    };
  }

  createFormGroup(){
    this.radForm = this.fb.group({
      sifraPozicije: [this.oldRad.sifraPozicije],
      datumOd:[new Date(this.oldRad.datumOd)],
      datumDo: [this.oldRad.datumDo != null ? new Date(this.oldRad.datumDo) : null],
      nazivPozicije: [this.oldRad.nazivPozicije],
      trenutana:[this.oldRad?.trenutna ? 'true': 'false']
    });
  }


  onChange(){
    const naziv = this.pozicije.find(x => x.sifraPozicije == this.radForm.get('sifraPozicije').value).nazivPozicije;
    this.radForm.get('nazivPozicije').setValue(naziv);
  }

  update(){
    this.rad = Object.assign({}, this.radForm.value);

    this.rad.trenutana === 'true' ? this.rad.trenutna = true : this.rad.trenutna = false;

    if(this.oldRad.trenutna !== this.rad.trenutna)
      this.rad.trenutnaChanged = true;
    
    if(this.oldRad.sifraPozicije !== this.rad.sifraPozicije)
      this.rad.sifraChanged = true;

    if(this.oldRad.nazivPozicije !== this.rad.nazivPozicije)
      this.rad.nazivChanged = true;
    
    if(new Date(this.rad.datumDo).getTime() == new Date(this.oldRad.datumDo).getTime())
      this.rad.datumDo = null;

    this.rad.sifraZaposlenog = this.oldRad.sifraZaposlenog;

    this.rnpService.update(this.rad).subscribe(() =>{
      this.alertify.success("Uspešno ste izmenili poziciju");
    }, error => {
      this.alertify.error(error);
    });
  }

}
