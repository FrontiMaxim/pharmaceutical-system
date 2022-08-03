import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Pharmacy } from "./pharmacy.entity";

export const pharmacyRepository: Repository<Pharmacy> = AppDataSource.getRepository(Pharmacy);