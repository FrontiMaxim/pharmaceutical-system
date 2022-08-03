import { DataSource } from "typeorm";
import { Availability } from "./availability/availability.entity";
import { Medicament } from "./medicament/medicament.entity";
import { Pharmacy } from "./pharmacy/pharmacy.entity";

export const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "front30post",
    database: "pharmaceutical_system",
    synchronize: true,
    logging: true,
    entities: [Medicament, Availability, Pharmacy],
    subscribers: [],
    migrations: [],
});