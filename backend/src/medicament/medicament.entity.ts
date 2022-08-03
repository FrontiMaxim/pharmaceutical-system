import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Availability } from "../availability/availability.entity";

@Entity()
export class Medicament {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", width: 30, nullable: false })
    name_medicament: string;

    @Column({ type: "int8", nullable: false  })
    amount: number;

    @Column({ type: "int8", nullable: false  })
    dosage: number;

    @Column({ type: "int8", nullable: false  })
    expiration_date: number;

    @OneToMany(() => Availability, (availability) => availability.medicament)
    avaiabilites: Availability[];
}