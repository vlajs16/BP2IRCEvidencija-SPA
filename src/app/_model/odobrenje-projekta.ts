import { PredlogProjekta } from './predlog-projekta';

export interface OdobrenjeProjekta {
    sifraOdobrenja: number,
    sifraPredlogaProjekta: number,
    datumOdobrenja: Date,
    opisOdobrenja: string,
    napomena: string,
    predlogProjekta: PredlogProjekta,
    novaSifra?: number
}
