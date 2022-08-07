import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"
import { Medicament } from "../medicament/medicament.entity";
import { Pharmacy } from "../pharmacy/pharmacy.entity";

@Entity()
export class Availability{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "bigint", nullable: false  })
    amount: number;

    @Column({ type: "money", nullable: false  })
    price: number;

    @Column({ type: "date", nullable: false })
    date_arrival: Date;

    @ManyToOne(() => Medicament, (medicament) => medicament.avaiabilites, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    medicament: Medicament;

    @ManyToOne(() => Pharmacy, (pharmacy) => pharmacy.avaiabilites, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    pharmacy: Pharmacy;
}