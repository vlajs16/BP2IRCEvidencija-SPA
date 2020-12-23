import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Zaposleni } from 'src/app/_model/zaposleni';

@Component({
  selector: 'app-lista-zaposlenih',
  templateUrl: './lista-zaposlenih.component.html',
  styleUrls: ['./lista-zaposlenih.component.css']
})
export class ListaZaposlenihComponent implements OnInit {
  public zaposleni: Zaposleni[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.zaposleni = data['zaposleni'];
    })
  }

}
