import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { OdobrenjeProjekta } from 'src/app/_model/odobrenje-projekta';
import { Ugovor } from 'src/app/_model/ugovor';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UgovorService } from 'src/app/_services/ugovor.service';

@Component({
  selector: 'app-ugovor-add',
  templateUrl: './ugovor-add.component.html',
  styleUrls: ['./ugovor-add.component.css']
})
export class UgovorAddComponent implements OnInit {
  ugovor: Ugovor;
  odobrenja: OdobrenjeProjekta[];
  ugovorForm: FormGroup;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private route: ActivatedRoute, private alertify: AlertifyService, 
    private ugovorService: UgovorService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.odobrenja = data['odobrenja'];
    });

    this.createUgovorForm();
    this.bsConfig = {
      containerClass: 'theme-blue',
      isAnimated: true
    };
  }

  createUgovorForm(){
    this.ugovorForm = this.fb.group({
      sifraUgovora: [0],
      datumDonosenja: [new Date()],
      datumIsteka: [new Date()],
      opisUgovora: [''],
      sifraOdobrenja: [this.odobrenja[0].sifraOdobrenja],
      sifraPredlogaProjekta: []
    });
  }

  add(){
    this.ugovor = Object.assign({}, this.ugovorForm.value);
    
    this.ugovorService.insert(this.ugovor).subscribe(() =>{
      this.alertify.success('Uspešno ste kreirali ugovor');
      this.router.navigate(['/ugovori']);
    }, error => {
      this.alertify.error(error);
    })

  }



}
