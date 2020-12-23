import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AlertifyService } from './_services/alertify.service';
import { ErrorInteceptorProvider } from './_services/error.interceptor';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { ZaposleniService } from './_services/zaposleni.service';
import { ZaposleniResolver } from './_resolvers/zaposleni.resolver';
import { ListaZaposlenihComponent } from './zaposleni/lista-zaposlenih/lista-zaposlenih.component';
import { ZaposleniDetaljiComponent } from './zaposleni/zaposleni-detalji/zaposleni-detalji.component';
import { ZaposleniIdResolver } from './_resolvers/zaposleni-id.resolver';
import { AddRadComponent } from './zaposleni/add-rad/add-rad.component';
import { PozicijaService } from './_services/pozicija.service';
import { PozicijeResolver } from './_resolvers/pozicije.resolver';
import { RadNaPozicijiService } from './_services/rad-na-poziciji.service';
import { RadResolver } from './_resolvers/rad.resolver';
import { EditRadComponent } from './zaposleni/edit-rad/edit-rad.component';
import { PredloziListaComponent } from './predlozi/predlozi-lista/predlozi-lista.component';
import { PredlogService } from './_services/predlog.service';
import { PredloziResolver } from './_resolvers/predlog.resolver';
import { PredlogIdResolver } from './_resolvers/predlog-id.resolver';
import { PredlogDetailComponent } from './predlozi/predlog-detail/predlog-detail.component';
import { PredlogAddComponent } from './predlozi/predlog-add/predlog-add.component';
import { KompanijaService } from './_services/kompanija.service';
import { KompanijeResolver } from './_resolvers/kompanije.resolver';
import { UgovorListeComponent } from './ugovori/ugovor-liste/ugovor-liste.component';
import { UgovorService } from './_services/ugovor.service';
import { UgovoriResolver } from './_resolvers/ugovori.resolver';
import { UgovorIdResolver } from './_resolvers/ugovor-id.resolver';
import { UgovorAddComponent } from './ugovori/ugovor-add/ugovor-add.component';
import { UgovorDetailComponent } from './ugovori/ugovor-detail/ugovor-detail.component';
import { OdobrenjeService } from './_services/odobrenje.service';
import { OdobrenjaResolver } from './_resolvers/odobrenja.resolver';
import { OdobrenjaListaComponent } from './odobrenja/odobrenja-lista/odobrenja-lista.component';
import { OdobrenjeAddComponent } from './odobrenja/odobrenje-add/odobrenje-add.component';
import { OdobrenjeDetailComponent } from './odobrenja/odobrenje-detail/odobrenje-detail.component';
import { OdobrenjeIdResolver } from './_resolvers/odobrenje-id.resolver';
import { DatePipe } from '@angular/common';
import { SpecificPredloziResolver } from './_resolvers/specific-predlog.resolver';
import { SpecificOdobrenjaResolver } from './_resolvers/specific-odobrenja.resolver';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ListaZaposlenihComponent,
    ZaposleniDetaljiComponent,
    AddRadComponent,
    EditRadComponent,
    PredloziListaComponent,
    PredlogDetailComponent,
    PredlogAddComponent,
    UgovorListeComponent,
    UgovorAddComponent,
    UgovorDetailComponent,
    OdobrenjaListaComponent,
    OdobrenjeAddComponent,
    OdobrenjeDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AlertifyService,
    ErrorInteceptorProvider,
    ZaposleniService,
    ZaposleniResolver,
    ZaposleniIdResolver,
    PozicijaService,
    PozicijeResolver,
    RadNaPozicijiService,
    RadResolver,
    PredlogService,
    PredloziResolver,
    PredlogIdResolver,
    KompanijaService,
    KompanijeResolver,
    UgovorService,
    UgovoriResolver,
    UgovorIdResolver,
    OdobrenjaResolver,
    OdobrenjeService,
    OdobrenjeIdResolver,
    DatePipe,
    SpecificPredloziResolver,
    SpecificOdobrenjaResolver
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
