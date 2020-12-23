import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Kompanija } from 'src/app/_model/kompanija';
import { PredlogProjekta } from 'src/app/_model/predlog-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { KompanijaService } from 'src/app/_services/kompanija.service';
import { PredlogService } from 'src/app/_services/predlog.service';

@Component({
  selector: 'app-predlozi-lista',
  templateUrl: './predlozi-lista.component.html',
  styleUrls: ['./predlozi-lista.component.css']
})
export class PredloziListaComponent implements OnInit {
  predlozi: PredlogProjekta[];
  searchForm: FormGroup;
  kompanije: Kompanija[];
  searched = false;

  constructor(private router: ActivatedRoute,
    private fb: FormBuilder, 
    private predlogService: PredlogService,
    private alertify: AlertifyService,
    private kompanijeService: KompanijaService) { }

  ngOnInit() {
    this.router.data.subscribe(data => {
      this.predlozi = data['predlozi'];
      // this.kompanije = data['kompanije'];
    });
    this.kompanije = this.kompanijeService.get();
    this.createSearchForm();
  }

  createSearchForm(){
    this.searchForm = this.fb.group({
      sifraKompanije: [,Validators.required]
    });
  }

  search(){
    if(this.searchForm.valid){
        this.predlogService.filter(this.searchForm.get('sifraKompanije').value).subscribe((res: PredlogProjekta[]) => {
          this.predlozi = res;
          this.searched = true;
        }, error => {
          this.alertify.error(error);
        });
      }
  }

  clear(){
    if(this.searched){
      this.predlogService.getAll().subscribe((res:PredlogProjekta[]) => {
        this.predlozi = res;
        this.searched = false;
        this.createSearchForm();
      }, error => {
        this.alertify.error(error);
      })
    }
  }

}
