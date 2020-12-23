export interface PredlogProjekta {
    sifraPredlogaProjekta: number,
    nazivProjekta: string,
    sifraKompanije: number,
    nazivKompanije: string,
    ciljProjekta?: string,
    aktivnostiProjekta?: string,
    opisProjekta?: string,
    predlogPocetka?: Date,
    trajanje?: number,
    datumZavrsetka?: Date,
    novaSifra?: number
}
