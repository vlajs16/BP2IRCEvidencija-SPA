import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OdobrenjeProjekta } from 'src/app/_model/odobrenje-projekta';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { Ugovor } from 'src/app/_model/ugovor';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UgovorService } from 'src/app/_services/ugovor.service';

@Component({
  selector: 'app-ugovor-detail',
  templateUrl: './ugovor-detail.component.html',
  styleUrls: ['./ugovor-detail.component.css'],
})
export class UgovorDetailComponent implements OnInit {
  ugovor: Ugovor;
  newUgovor: Ugovor;
  odobrenja: OdobrenjeProjekta[];
  predlozi: PredlogProjekta[];
  ugovorForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;
  editing = false;

  constructor(
    private route: ActivatedRoute,
    private alertify: AlertifyService,
    private ugovorService: UgovorService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.ugovor = data['ugovor'];
      this.odobrenja = data['odobrenja'];
      this.predlozi = data['predlozi'];
    });

    this.createUgovorForm();
    this.bsConfig = {
      containerClass: 'theme-blue',
      isAnimated: true,
    };

    this.ugovorForm.disable();
  }

  createUgovorForm() {
    this.ugovorForm = this.fb.group({
      sifraUgovora: [this.ugovor.sifraUgovora],
      datumDonosenja: [new Date(this.ugovor.datumDonosenja)],
      datumIsteka: [new Date(this.ugovor.datumIsteka)],
      opisUgovora: [this.ugovor.opisUgovora],
      sifraOdobrenja: [this.ugovor.sifraOdobrenja],
      sifraPredlogaProjekta: [this.ugovor.sifraPredlogaProjekta],
    });
  }

  onChange() {
    const sifra = this.odobrenja.find(
      (x) => x.sifraOdobrenja == this.ugovorForm.get('sifraOdobrenja').value
    ).sifraPredlogaProjekta;
    this.ugovorForm.get('sifraPredlogaProjekta').setValue(sifra);
  }

  edit() {
    if (this.ugovorForm.touched) {
      this.newUgovor = Object.assign({}, this.ugovorForm.value);

      const sifra = this.odobrenja.find(
        (x) => x.sifraOdobrenja == this.newUgovor.sifraOdobrenja
        ).sifraPredlogaProjekta;

        if (this.newUgovor.sifraPredlogaProjekta == sifra)
          this.newUgovor.sifraPredlogaProjekta = null;
        
        if (this.ugovor.sifraOdobrenja == this.newUgovor.sifraOdobrenja)
          this.newUgovor.sifraOdobrenja = -1;

        if(this.ugovor.sifraUgovora != this.newUgovor.sifraUgovora)
          this.newUgovor.novaSifra = this.newUgovor.sifraUgovora;

      this.ugovorService.update(this.ugovor.sifraUgovora, this.newUgovor).subscribe(
        () => {
          this.alertify.success('Uspešno ste izmenili ugovor');
          this.ugovorService.getById(this.ugovor.sifraUgovora).subscribe(
            (res: Ugovor) => {
              this.ugovor = res;
              this.createUgovorForm();
              this.ugovorForm.disable();
              this.editing = false;
            }, error =>{
              this.router.navigate(['/ugovori']);
            })
        },
        (error) => {
          this.alertify.error(error);
        }
      );
    }
  }

  toggle() {
    this.editing = !this.editing;
    if (this.editing) this.ugovorForm.enable();
    else {
      this.ugovorForm.disable();
      this.createUgovorForm();
    }
  }
}
