import { IMedicament } from "./IMedicament";


export interface IPharmacy {
    id: number;
    name_pharmacy: string;
    address: string;
    phone: number;
    start_work: Date;
    end_work: Date;
    medicaments:  IMedicament[];
}

