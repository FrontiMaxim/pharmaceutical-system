import { IPharmacy } from "./IPharmacy";


export interface IMedicament {
    id: number;
    name_medicament: string;
    weight: number;
    dosage: number;
    expiration_date: number;
    amount: number;
    price: number;
    date_arrival: Date
    pharmacies: IPharmacy[];
}