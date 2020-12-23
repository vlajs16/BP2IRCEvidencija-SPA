import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Kompanija } from 'src/app/_model/kompanija';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { PredlogService } from 'src/app/_services/predlog.service';

@Component({
  selector: 'app-predlog-add',
  templateUrl: './predlog-add.component.html',
  styleUrls: ['./predlog-add.component.css']
})
export class PredlogAddComponent implements OnInit {
  kompanije: Kompanija[];
  predlogForm: FormGroup;
  predlog: PredlogProjekta;
  bsConfig: Partial<BsDatepickerConfig>;
  
  constructor(private router: ActivatedRoute, private alertify: AlertifyService,
    private fb: FormBuilder, private predlogService: PredlogService) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.kompanije = data['kompanije'];
    });

    this.createPredlogForm();

    this.bsConfig = {
      containerClass: 'theme-blue',
      minDate: new Date(),
      isAnimated: true
    };
  }

  createPredlogForm(){
    this.predlogForm = this.fb.group({
      sifraPredlogaProjekta: [],
      nazivProjekta: [''],
      sifraKompanije: [this.kompanije[0].sifraKompanije],
      nazivKompanije:[''],
      ciljProjekta: [''],
      aktivnostiProjekta: [''],
      opisProjekta: [''],
      predlogPocetka:[new Date()],
      trajanje: [0],
      datumZavrsetka: [null]
    });
  }

  add(){
    this.predlog = Object.assign({}, this.predlogForm.value);
    
    this.predlogService.insert(this.predlog).subscribe(() => {
      this.alertify.success('Uspešno ste uneli predlog');
    }, error =>{
      this.alertify.error(error);
    })
  }


}
