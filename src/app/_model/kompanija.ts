import { Kontakt } from './kontakt';
import { Locirana } from './locirana';

export interface Kompanija {
    sifraKompanije: number,
    nazivKompanije: string,
    opisDelatnosti: string,
    kontakti: Kontakt[],
    lokacije: Locirana[]
}
