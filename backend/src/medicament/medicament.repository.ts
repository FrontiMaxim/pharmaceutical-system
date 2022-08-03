import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Medicament } from "./medicament.entity";


export const medicamentRepository: Repository<Medicament> = AppDataSource.getRepository(Medicament);