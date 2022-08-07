import { DeleteResult, UpdateResult } from "typeorm";

import { ErrorCreateElement } from "../errors/ErrorCreateElement";
import { ErrorNotElement } from "../errors/ErrorNotElement";
import { Medicament } from "./medicament.entity";
import { medicamentRepository } from "./medicament.repository";


export class MedicamentServices {

    async getAllMedicamentes(): Promise<Medicament[]> {

        return await medicamentRepository.find();
    }

    async getMedicament(id: number): Promise<Medicament> {

        const data: Medicament | null= await  medicamentRepository.findOne({where: {id: id}});
        
        if(data) {
            return data;
        } else {
            throw new ErrorNotElement();
        }
    }

    async createMedicament(newMedicament: Medicament): Promise<Medicament> {
        
        try {
            return await medicamentRepository.save(newMedicament);
        } catch(error) {
            throw new ErrorCreateElement();
        }
    }

    async removeMedicament(id: number): Promise<DeleteResult> {

        const deleteResult: DeleteResult = await medicamentRepository.delete(id);

        if(deleteResult['affected'] !== 0) {
            return deleteResult;
        } else {
            throw new ErrorNotElement();
        }
    }

    async updateMedicament(id: number, newMedicament: Medicament): Promise<UpdateResult> {

        const updateResult: UpdateResult = await medicamentRepository.update(id, newMedicament);

        if(updateResult['affected'] !== 0) {
            return updateResult;
        } else {
            throw new ErrorNotElement();
        }
    }
}