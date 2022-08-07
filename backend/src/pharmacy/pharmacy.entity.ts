import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm"
import { Medicament } from "../medicament/medicament.entity";

@Entity()
export class Pharmacy{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", width: 150, nullable: false  })
    name_pharmacy: string;
    
    @Column({ type: "varchar", width: 100, nullable: false  })
    address: string;

    @Column({ type: "bigint", nullable: false  })
    phone: number;

    @Column({ type: "time", nullable: false  })
    start_work: Date;

    @Column({ type: "time", nullable: false  })
    end_work: Date;

    @OneToMany(() => Medicament, (medicament) => medicament.pharmacie)
    medicaments:  Medicament[];
}