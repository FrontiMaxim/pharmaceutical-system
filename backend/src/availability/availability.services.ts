import { DeleteResult, UpdateResult } from "typeorm";

import { ErrorCreateElement } from "../errors/ErrorCreateElement";
import { ErrorNotElement } from "../errors/ErrorNotElement";
import { Availability } from "./availability.entity";
import { availabilityRepository } from "./availability.repository";

export class AvailabilitytServices {

    async getAllAvailabilities(): Promise<Availability[]> {

        return await availabilityRepository.find();
    }

    async getAvailability(id: number): Promise<Availability> {

        const data: Availability | null= await  availabilityRepository.findOneBy({id: id});
        
        if(data) {
            return data;
        } else {
            throw new ErrorNotElement();
        }
    }

    async createAvailability(newAvailability: Availability): Promise<Availability> {
        
        try {
            return await availabilityRepository.save(newAvailability);
        } catch(error) {
            throw new ErrorCreateElement();
        }
    }

    async removeAvailability(id: number): Promise<DeleteResult> {

        const deleteResult: DeleteResult = await availabilityRepository.delete(id);

        if(deleteResult['affected'] !== 0) {
            return deleteResult;
        } else {
            throw new ErrorNotElement();
        }
    }

    async updateAvailability(id: number, newAvailability: Availability): Promise<UpdateResult> {

        const updateResult: UpdateResult = await availabilityRepository.update(id, newAvailability);

        if(updateResult['affected'] !== 0) {
            return updateResult;
        } else {
            throw new ErrorNotElement();
        }
    }
}