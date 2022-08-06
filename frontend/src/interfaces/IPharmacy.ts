import { IAvailability } from "./IAvailability";

export interface IPharmacy {
    id: number;
    name_pharmacy: string;
    address: string;
    phone: number;
    start_work: Date;
    end_work: Date;
    avaiabilites: IAvailability[];
}

