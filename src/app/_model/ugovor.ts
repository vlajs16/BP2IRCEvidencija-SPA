import { PredlogProjekta } from './predlog-projekta';

export interface Ugovor {
    sifraUgovora: number,
    datumDonosenja: Date,
    datumIsteka: Date,
    opisUgovora: string,
    sifraOdobrenja: number,
    sifraPredlogaProjekta?: number,
    predlogProjekta?: PredlogProjekta,
    novaSifra?: number
}
