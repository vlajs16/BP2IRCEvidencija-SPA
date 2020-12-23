import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Pozicija } from 'src/app/_model/pozicija';
import { RadNaPoziciji } from 'src/app/_model/rad-na-poziciji';
import { Zaposleni } from 'src/app/_model/zaposleni';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PozicijaService } from 'src/app/_services/pozicija.service';
import { RadNaPozicijiService } from 'src/app/_services/rad-na-poziciji.service';

@Component({
  selector: 'app-add-rad',
  templateUrl: './add-rad.component.html',
  styleUrls: ['./add-rad.component.css']
})
export class AddRadComponent implements OnInit {
  zaposleni: Zaposleni;
  radForm: FormGroup;
  rad: RadNaPoziciji;
  pozicije: Pozicija[];
  bsConfig: Partial<BsDatepickerConfig>;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,
    private rnpService: RadNaPozicijiService, private alertify: AlertifyService,
    private pozicijeService: PozicijaService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.zaposleni = data['zaposleni'];
      this.pozicije = data['pozicije'];
      this.pozicijeService.setPozicije(this.pozicije);
    });

    this.createFormGroup();

    this.bsConfig = {
      containerClass: 'theme-blue',
      minDate: new Date(),
      isAnimated: true
    };
  }

  createFormGroup(){
    this.radForm = this.fb.group({
      sifraPozicije: [this.pozicije[0].sifraPozicije],
      datumOd:[null],
      datumDo: [null],
      nazivPozicije: [''],
      trenutna:[false]
    });
  }

  add(){
    this.rad = Object.assign({}, this.radForm.value);
    this.rad.sifraZaposlenog = this.zaposleni.sifraZaposlenog;

    console.log(this.rad);

    this.rnpService.insert(this.rad).subscribe(() =>{
      this.alertify.success("Uspešno ste uneli poziciju");
    }, error => {
      this.alertify.error(error);
    });
  }

}
