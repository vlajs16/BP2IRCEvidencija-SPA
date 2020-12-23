import { Grad } from './grad';

export interface Locirana {
    sifraKompanije?: number,
    sifraGrada?: number,
    nazivUlice: string,
    pozivNaBroj: string,
    brojUlice: string,
    sprat?: string,
    brojStana?: string,
    grad?: Grad
}
