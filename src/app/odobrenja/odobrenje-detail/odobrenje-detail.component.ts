import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OdobrenjeProjekta } from 'src/app/_model/odobrenje-projekta';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { OdobrenjeService } from 'src/app/_services/odobrenje.service';

@Component({
  selector: 'app-odobrenje-detail',
  templateUrl: './odobrenje-detail.component.html',
  styleUrls: ['./odobrenje-detail.component.css']
})
export class OdobrenjeDetailComponent implements OnInit {
  odobrenjeForm: FormGroup;
  odobrenje: OdobrenjeProjekta;
  newOdobrenje: OdobrenjeProjekta;
  predlozi: PredlogProjekta[];
  bsConfig: Partial<BsDatepickerConfig>;
  editing = false;

  constructor(private route: ActivatedRoute, 
    private alertify: AlertifyService, 
    private odobrenjeService: OdobrenjeService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.predlozi = data['predlozi'];
      this.odobrenje = data['odobrenje'];
    });

    this.createOdobrenjeForm();

    this.bsConfig = {
      containerClass: 'theme-blue',
      isAnimated: true
    };

    this.odobrenjeForm.disable();
  }

  createOdobrenjeForm(){
    this.odobrenjeForm = this.fb.group({
      sifraOdobrenja: [this.odobrenje.sifraOdobrenja],
      sifraPredlogaProjekta: [this.odobrenje.sifraPredlogaProjekta],
      datumOdobrenja: [new Date(this.odobrenje.datumOdobrenja)],
      opisOdobrenja: [this.odobrenje.opisOdobrenja],
      napomena: [this.odobrenje.napomena]
    });
  }

  edit(){
    if(this.odobrenjeForm.touched){
      this.newOdobrenje = Object.assign({}, this.odobrenjeForm.value);
  
      if(this.odobrenje.sifraPredlogaProjekta == this.newOdobrenje.sifraPredlogaProjekta)
        this.newOdobrenje.sifraPredlogaProjekta = -1;

      if(this.odobrenje.sifraOdobrenja != this.newOdobrenje.sifraOdobrenja)
        this.newOdobrenje.novaSifra = this.newOdobrenje.sifraOdobrenja;
  
      this.odobrenjeService.update(this.odobrenje.sifraOdobrenja, this.newOdobrenje).subscribe(() => {
        this.alertify.success("Uspesno ste izmenili odobrenje");
        this.odobrenjeService.getById(this.odobrenje.sifraOdobrenja).subscribe((res: OdobrenjeProjekta) => {
          this.odobrenje = res;
          this.createOdobrenjeForm();
          this.odobrenjeForm.disable();
          this.editing = false;
        }, error => {
          this.router.navigate(['/odobrenja']);
        });
      }, (error) => {
        this.alertify.error(error);
      })
    }
  }

  toggle() {
    this.editing = !this.editing;
    if (this.editing) this.odobrenjeForm.enable();
    else {
      this.odobrenjeForm.disable();
      this.createOdobrenjeForm();
    }
  }

}
