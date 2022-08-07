import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, ManyToOne } from "typeorm"
import { Pharmacy } from "../pharmacy/pharmacy.entity";

@Entity()
export class Medicament {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", width: 30, nullable: false })
    name_medicament: string;

    @Column({ type: "int8", nullable: false  })
    weight: number;

    @Column({ type: "int8", nullable: false  })
    dosage: number;

    @Column({ type: "int8", nullable: false  })
    expiration_date: number;

    @Column({ type: "int8", nullable: false  })
    amount: number;

    @Column({ type: "int8", nullable: false  })
    price: number;

    @Column({ type: "date", nullable: false  })
    date_arrival: Date

    @ManyToOne(() => Pharmacy, (pharmacy) => pharmacy.medicaments, {cascade: true})
    pharmacie: Pharmacy;
}