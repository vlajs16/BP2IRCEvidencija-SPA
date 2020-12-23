import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Zaposleni } from 'src/app/_model/zaposleni';

@Component({
  selector: 'app-zaposleni-detalji',
  templateUrl: './zaposleni-detalji.component.html',
  styleUrls: ['./zaposleni-detalji.component.css']
})
export class ZaposleniDetaljiComponent implements OnInit {
  zaposleni: Zaposleni;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.zaposleni = data['zaposleni'];
    });
  }

  

}
