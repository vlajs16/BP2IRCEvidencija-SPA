import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OdobrenjeProjekta } from 'src/app/_model/odobrenje-projekta';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { OdobrenjeService } from 'src/app/_services/odobrenje.service';

@Component({
  selector: 'app-odobrenje-add',
  templateUrl: './odobrenje-add.component.html',
  styleUrls: ['./odobrenje-add.component.css']
})
export class OdobrenjeAddComponent implements OnInit {
  odobrenjeForm: FormGroup;
  odobrenje: OdobrenjeProjekta;
  predlozi: PredlogProjekta[];
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private route: ActivatedRoute, 
    private alertify: AlertifyService, 
    private odobrenjeService: OdobrenjeService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.predlozi = data['predlozi'];
    });

    this.createOdobrenjeForm();

    this.bsConfig = {
      containerClass: 'theme-blue',
      isAnimated: true
    };
  }

  createOdobrenjeForm(){
    this.odobrenjeForm = this.fb.group({
      sifraOdobrenja: [],
      sifraPredlogaProjekta: [this.predlozi[0].sifraPredlogaProjekta],
      datumOdobrenja: [new Date()],
      opisOdobrenja: [''],
      napomena: ['']
    });
  }

  add(){
    this.odobrenje = Object.assign({}, this.odobrenjeForm.value);

    this.odobrenjeService.insert(this.odobrenje).subscribe(() => {
      this.alertify.success("Uspesno ste odobrili projekat");
      this.router.navigate(['/odobrenja']);
    }, (error) => {
      this.alertify.error(error);
    })
  }

}
