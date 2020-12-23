import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OdobrenjeProjekta } from 'src/app/_model/odobrenje-projekta';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { OdobrenjeService } from 'src/app/_services/odobrenje.service';

@Component({
  selector: 'app-odobrenja-lista',
  templateUrl: './odobrenja-lista.component.html',
  styleUrls: ['./odobrenja-lista.component.css']
})
export class OdobrenjaListaComponent implements OnInit {
  odobrenja: OdobrenjeProjekta[];

  constructor(private route: ActivatedRoute, private alertify: AlertifyService,
    private odobService: OdobrenjeService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.odobrenja = data['odobrenja'];
    });
  }

}
