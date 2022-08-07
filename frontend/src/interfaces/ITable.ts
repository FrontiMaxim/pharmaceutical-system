import { IMedicament } from "./IMedicament";
import { IPharmacy } from "./IPharmacy";

export interface ITable {
    caption: string;
    data: IPharmacy[] | IMedicament[]
}