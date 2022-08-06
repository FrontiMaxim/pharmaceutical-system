import { IMedicament } from "./IMedicament";
import { IPharmacy } from "./IPharmacy";

export interface IAvailability {
    id: number;
    name_medicament: string;
    amount: number;
    price: number;
    date_arrival: Date;
    medicament: IMedicament;
    pharmacy: IPharmacy;
}