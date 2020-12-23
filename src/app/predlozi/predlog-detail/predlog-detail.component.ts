import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Kompanija } from 'src/app/_model/kompanija';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { KompanijaService } from 'src/app/_services/kompanija.service';
import { PredlogService } from 'src/app/_services/predlog.service';

@Component({
  selector: 'app-predlog-detail',
  templateUrl: './predlog-detail.component.html',
  styleUrls: ['./predlog-detail.component.css']
})
export class PredlogDetailComponent implements OnInit {
  kompanije: Kompanija[];
  predlogForm: FormGroup;
  predlog: PredlogProjekta;
  editedPredlog: PredlogProjekta;
  public editing: boolean = false;
  bsConfig: Partial<BsDatepickerConfig>;


  constructor(private router: ActivatedRoute, private alertify: AlertifyService,
    private fb: FormBuilder, private predlogService: PredlogService, private route: Router, private kompanijaService: KompanijaService) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      // this.kompanije = data['kompanije'];
      this.predlog = data['predlog'];
    });

    this.kompanije = this.kompanijaService.get();

    this.createPredlogForm();
    this.bsConfig = {
      containerClass: 'theme-blue',
      minDate: new Date(),
      isAnimated: true
    };

    this.predlogForm.disable();
  }

  createPredlogForm(){
    this.predlogForm = this.fb.group({
      sifraPredlogaProjekta: [this.predlog.sifraPredlogaProjekta],
      nazivProjekta: [this.predlog.nazivProjekta],
      sifraKompanije: [this.predlog.sifraKompanije],
      nazivKompanije:[this.predlog.nazivKompanije],
      ciljProjekta: [this.predlog.ciljProjekta],
      aktivnostiProjekta: [this.predlog.aktivnostiProjekta],
      opisProjekta: [this.predlog.opisProjekta],
      predlogPocetka:[new Date(this.predlog.predlogPocetka)],
      trajanje: [this.predlog.trajanje],
      datumZavrsetka: [new Date(this.predlog.datumZavrsetka)]
    });
  }

  edit(){
    if(this.predlogForm.touched){
      this.editedPredlog = Object.assign({}, this.predlogForm.value);
      
      const naziv = this.editedPredlog.nazivKompanije;
      const kompanija = this.kompanije.find(x => x.sifraKompanije == this.editedPredlog.sifraKompanije);

      if(naziv == kompanija.nazivKompanije)
        this.editedPredlog.nazivKompanije = null;

      if(new Date(this.predlog.datumZavrsetka).getTime() == new Date(this.editedPredlog.datumZavrsetka).getTime())
        this.editedPredlog.datumZavrsetka = null;

      if(new Date(this.predlog.predlogPocetka).getTime() == new Date(this.editedPredlog.predlogPocetka).getTime())
        this.editedPredlog.predlogPocetka = null;
      
      if(this.editedPredlog.trajanje == this.predlog.trajanje)
        this.editedPredlog.trajanje = null;
      
      if(this.predlog.sifraPredlogaProjekta != this.editedPredlog.sifraPredlogaProjekta)
        this.editedPredlog.novaSifra = this.editedPredlog.sifraPredlogaProjekta;

      this.predlogService.update(this.predlog.sifraPredlogaProjekta, this.editedPredlog).subscribe(() => {
        this.alertify.success('Uspešno ste izmenili predlog');
        this.predlogService.getById(this.predlog.sifraPredlogaProjekta).subscribe((pred:PredlogProjekta) => {
          this.predlog = pred;
          this.createPredlogForm();
          this.predlogForm.disable();
          this.editing = false;
        }, error =>{
          this.route.navigate(['/predlozi/'])
        });
      }, error =>{
        this.alertify.error(error);
        this.createPredlogForm();
        this.predlogForm.disable();
        this.editing = false;
      });

    }
  }

  onChange(){
    const kompanija = this.kompanije.find(x => x.sifraKompanije == this.predlogForm.get('sifraKompanije').value);
    this.predlogForm.get('nazivKompanije').setValue(kompanija.nazivKompanije);
  }

  
  toggle(){
    this.editing = !this.editing;
    if(this.editing)
      this.predlogForm.enable();
    else{
      this.predlogForm.disable();
      this.createPredlogForm();
    }
  }
}
