import { Component, OnInit } from '@angular/core';
import { Kompanija } from '../_model/kompanija';
import { KompanijaService } from '../_services/kompanija.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private kompanijeService: KompanijaService) { }

  ngOnInit() {
    this.kompanijeService.getAll().subscribe((res: Kompanija[]) => {
      this.kompanijeService.set(res);
    })
  }

}
