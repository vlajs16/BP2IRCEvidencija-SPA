import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OdobrenjaListaComponent } from './odobrenja/odobrenja-lista/odobrenja-lista.component';
import { OdobrenjeAddComponent } from './odobrenja/odobrenje-add/odobrenje-add.component';
import { OdobrenjeDetailComponent } from './odobrenja/odobrenje-detail/odobrenje-detail.component';
import { PredlogAddComponent } from './predlozi/predlog-add/predlog-add.component';
import { PredlogDetailComponent } from './predlozi/predlog-detail/predlog-detail.component';
import { PredloziListaComponent } from './predlozi/predlozi-lista/predlozi-lista.component';
import { UgovorAddComponent } from './ugovori/ugovor-add/ugovor-add.component';
import { UgovorDetailComponent } from './ugovori/ugovor-detail/ugovor-detail.component';
import { UgovorListeComponent } from './ugovori/ugovor-liste/ugovor-liste.component';
import { AddRadComponent } from './zaposleni/add-rad/add-rad.component';
import { EditRadComponent } from './zaposleni/edit-rad/edit-rad.component';
import { ListaZaposlenihComponent } from './zaposleni/lista-zaposlenih/lista-zaposlenih.component';
import { ZaposleniDetaljiComponent } from './zaposleni/zaposleni-detalji/zaposleni-detalji.component';
import { KompanijeResolver } from './_resolvers/kompanije.resolver';
import { OdobrenjaResolver } from './_resolvers/odobrenja.resolver';
import { OdobrenjeIdResolver } from './_resolvers/odobrenje-id.resolver';
import { PozicijeResolver } from './_resolvers/pozicije.resolver';
import { PredlogIdResolver } from './_resolvers/predlog-id.resolver';
import { PredloziResolver } from './_resolvers/predlog.resolver';
import { RadResolver } from './_resolvers/rad.resolver';
import { SpecificOdobrenjaResolver } from './_resolvers/specific-odobrenja.resolver';
import { SpecificPredloziResolver } from './_resolvers/specific-predlog.resolver';
import { UgovorIdResolver } from './_resolvers/ugovor-id.resolver';
import { UgovoriResolver } from './_resolvers/ugovori.resolver';
import { ZaposleniIdResolver } from './_resolvers/zaposleni-id.resolver';
import { ZaposleniResolver } from './_resolvers/zaposleni.resolver';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'zaposleni',
    component: ListaZaposlenihComponent,
    resolve: { zaposleni: ZaposleniResolver },
  },
  {
    path: 'zaposleni/:id',
    component: ZaposleniDetaljiComponent,
    resolve: { zaposleni: ZaposleniIdResolver },
  },
  {
    path: 'rad/add/:id',
    component: AddRadComponent,
    resolve: { zaposleni: ZaposleniIdResolver, pozicije: PozicijeResolver },
  },
  {
    path: 'rad/edit/:sifraZap/:sifraPoz/:datumOd',
    component: EditRadComponent,
    resolve: { rad: RadResolver },
  },
  {
    path: 'predlozi',
    component: PredloziListaComponent,
    resolve: { predlozi: PredloziResolver, 
        // kompanije: KompanijeResolver
     },
  },
  {
    path: 'predlozi/detail/:id',
    component: PredlogDetailComponent,
    resolve: { predlog: PredlogIdResolver, 
        // kompanije: KompanijeResolver 
    },
  },
  {
    path: 'predlozi/add',
    component: PredlogAddComponent,
    resolve: { kompanije: KompanijeResolver },
  },
  {
    path: 'ugovori',
    component: UgovorListeComponent,
    resolve: { ugovori: UgovoriResolver },
  },
  {
    path: 'ugovori/detail/:id',
    component: UgovorDetailComponent,
    resolve: {
      ugovor: UgovorIdResolver,
      odobrenja: OdobrenjaResolver,
      predlozi: PredloziResolver,
    },
  },
  {
    path: 'ugovori/add',
    component: UgovorAddComponent,
    resolve: { odobrenja: SpecificOdobrenjaResolver },
  },
  {
    path: 'odobrenja',
    component: OdobrenjaListaComponent,
    resolve: { odobrenja: OdobrenjaResolver },
  },
  {
    path: 'odobrenja/detail/:id',
    component: OdobrenjeDetailComponent,
    resolve: { odobrenje: OdobrenjeIdResolver, predlozi: PredloziResolver },
  },
  {
    path: 'odobrenja/add',
    component: OdobrenjeAddComponent,
    resolve: { predlozi: SpecificPredloziResolver },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
