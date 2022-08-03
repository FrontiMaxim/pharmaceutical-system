import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Availability } from "./availability.entity";


export const availabilityRepository: Repository<Availability> = AppDataSource.getRepository(Availability);