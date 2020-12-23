import { RadNaPoziciji } from './rad-na-poziciji';

export interface Zaposleni {
    sifraZaposlenog: number,
    ime: string,
    prezime: string,
    jmbg: string,
    staz: number,
    datumZaposlenja?: Date,
    radoviNaPoziciji?: RadNaPoziciji[]
}
