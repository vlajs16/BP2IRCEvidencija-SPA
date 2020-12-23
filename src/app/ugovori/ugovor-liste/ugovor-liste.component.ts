import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Ugovor } from 'src/app/_model/ugovor';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { UgovorService } from 'src/app/_services/ugovor.service';

@Component({
  selector: 'app-ugovor-liste',
  templateUrl: './ugovor-liste.component.html',
  styleUrls: ['./ugovor-liste.component.css']
})
export class UgovorListeComponent implements OnInit {
  ugovori: Ugovor[];
  searchForm: FormGroup;
  searched = false;
  bsConfig: Partial<BsDatepickerConfig>;


  constructor(private route: ActivatedRoute, private alertify: AlertifyService, 
    private ugovorService: UgovorService, private fb: FormBuilder, private datepipe: DatePipe) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.ugovori = data['ugovori'];
    });
    this.createSearchForm();
    this.bsConfig = {
      containerClass: 'theme-blue',
      isAnimated: true,
    };
  }

  delete(id: number){
    this.ugovorService.delete(id).subscribe(()=>{
      this.alertify.success('Uspešno ste obrisali ugovor');
      this.ugovorService.getAll().subscribe((ugovori: Ugovor[]) =>{
        this.ugovori = ugovori;
      }, error => {
       this.alertify.error(error) ;
      });
    }, error => {
      this.alertify.error(error);
    })
  }

  createSearchForm(){
    this.searchForm = this.fb.group({
      datumOd: [null ,Validators.required],
      datumDo: [null]
    });

  }

  search(){
    if(this.searchForm.valid){
      let first = this.datepipe.transform(new Date(this.searchForm.get('datumOd').value), 'yyyy-MM-dd');
      let second = this.searchForm.get('datumDo').value != null ? 
                this.datepipe.transform(new Date(this.searchForm.get('datumDo').value), 'yyyy-MM-dd') : null;
        this.ugovorService.filter(first, second)
        .subscribe((res: Ugovor[]) => {
          this.ugovori = res;
          this.searched = true;
        }, error => {
          this.alertify.error(error);
        });
      }
  }

  clear(){
    if(this.searched){
      this.ugovorService.getAll().subscribe((res:Ugovor[]) => {
        this.ugovori = res;
        this.searched = false;
        this.createSearchForm();
      }, error => {
        this.alertify.error(error);
      })
    }
  }

}
