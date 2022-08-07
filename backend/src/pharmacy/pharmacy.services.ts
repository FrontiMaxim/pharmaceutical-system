import { DeleteResult, UpdateResult } from "typeorm";

import { ErrorCreateElement } from "../errors/ErrorCreateElement";
import { ErrorNotElement } from "../errors/ErrorNotElement";
import { Pharmacy } from "./pharmacy.entity";
import { pharmacyRepository } from "./pharmacy.repository";

export class PharmacyServices {

    async getAllPharmacies(): Promise<Pharmacy[]> {

        return await pharmacyRepository.find();
    }

    async getPharmacy(id: number): Promise<Pharmacy> {

        const data: Pharmacy | null= await pharmacyRepository.findOne({where: {id: id}, relations: ['medicaments']});
        
        if(data) {
            return data;
        } else {
            throw new ErrorNotElement();
        }
    }

    async createPharmacy(newPharmacy: Pharmacy): Promise<Pharmacy> {
        
        try {
            return await pharmacyRepository.save(newPharmacy);
        } catch(error) {
            throw new ErrorCreateElement();
        }
    }

    async removePharmacy(id: number): Promise<DeleteResult> {

        const deleteResult: DeleteResult = await pharmacyRepository.delete(id);

        if(deleteResult['affected'] !== 0) {
            return deleteResult;
        } else {
            throw new ErrorNotElement();
        }
    }

    async updatePharmacy(id: number, newPharmacy: Pharmacy): Promise<UpdateResult> {

        const updateResult: UpdateResult = await pharmacyRepository.update(id, newPharmacy);

        if(updateResult['affected'] !== 0) {
            return updateResult;
        } else {
            throw new ErrorNotElement();
        }
    }
}