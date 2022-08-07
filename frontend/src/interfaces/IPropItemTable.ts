import { IMedicament } from "./IMedicament";
import { IPharmacy } from "./IPharmacy";

export interface IPropItemTable {
    id: number,
    row:  IPharmacy | IMedicament
  }