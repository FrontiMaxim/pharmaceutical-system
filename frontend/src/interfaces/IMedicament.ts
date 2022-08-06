import { IAvailability } from "./IAvailability";

export interface IMedicament {
    id: number;
    name_medicament: string;
    amount: number;
    dosage: number;
    expiration_date: number;
    avaiabilites: IAvailability[];
}