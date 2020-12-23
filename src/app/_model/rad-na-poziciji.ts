export interface RadNaPoziciji {
    sifraZaposlenog: number,
    sifraPozicije: number,
    datumOd: Date,
    datumDo?: Date,
    nazivPozicije?: string,
    trenutna?: boolean,
    sifraChanged?: boolean,
    nazivChanged?: boolean,
    trenutnaChanged?: boolean,
    trenutana?: string
}
