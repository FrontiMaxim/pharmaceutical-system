import express, {Express, json, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import helmet from 'helmet';


import { AppDataSource } from './data-source';
import { PharmacyServices } from './pharmacy/pharmacy.services';
import { Pharmacy } from './pharmacy/pharmacy.entity';
import { MedicamentServices } from './medicament/medicament.services';
import { Medicament } from './medicament/medicament.entity';

const server: Express = express();
const PORT = 8080;

const PATH_PHARMACY: string = '/pharmacy';
const PATH_MEDICAMENT: string = '/medicament';

const pharmacyServices: PharmacyServices = new PharmacyServices();
const medicamentServices: MedicamentServices = new MedicamentServices();

server.use(json());
server.use(helmet());

// PHARMACY CRUD

server.get(PATH_PHARMACY, (req: Request, res: Response) => {

    if(req.query.id) {
        const id: number = Number(req.query.id);

        pharmacyServices.getPharmacy(id)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(() => res.status(StatusCodes.NOT_FOUND).send());
    } else {
        pharmacyServices.getAllPharmacies()
            .then(data => res.status(StatusCodes.OK).send(data))
    }
});


server.post(PATH_PHARMACY, (req: Request, res: Response) => {

    const newPharmacy: Pharmacy = req.body as Pharmacy;

    pharmacyServices.createPharmacy(newPharmacy)
        .then(() => res.status(StatusCodes.CREATED).send())
        .catch(() =>  res.status(StatusCodes.BAD_REQUEST).send());
});


server.delete(PATH_PHARMACY, (req: Request, res: Response) => {

    const id: number = Number(req.query.id);

    pharmacyServices.removePharmacy(id)
        .then(() => res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());
});


server.put(PATH_PHARMACY, (req: Request, res: Response) => {
    const id: number = Number(req.query.id);
    const newPharmacy: Pharmacy = req.body as Pharmacy;

    pharmacyServices.updatePharmacy(id, newPharmacy)
        .then(() =>  res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());

});


// MEDICAMENT CRUD

server.get(PATH_MEDICAMENT, (req: Request, res: Response) => {

    if(req.query.id) {
        const id: number = Number(req.query.id);

        medicamentServices.getMedicament(id)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(() => res.status(StatusCodes.NOT_FOUND).send());
    } else {
        medicamentServices.getAllMedicamentes()
            .then(data => res.status(StatusCodes.OK).send(data))
    }
});


server.post(PATH_MEDICAMENT, (req: Request, res: Response) => {

    const newMedicament: Medicament = req.body as Medicament;

    medicamentServices.createMedicament(newMedicament)
        .then(() => res.status(StatusCodes.CREATED).send())
        .catch(() =>  res.status(StatusCodes.BAD_REQUEST).send());
});


server.delete(PATH_MEDICAMENT, (req: Request, res: Response) => {

    const id: number = Number(req.query.id);

    medicamentServices.removeMedicament(id)
        .then(() => res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());
});


server.put(PATH_MEDICAMENT, (req: Request, res: Response) => {
    const id: number = Number(req.query.id);
    const newMedicament: Medicament = req.body as Medicament;

    medicamentServices.updateMedicament(id, newMedicament)
        .then(() =>  res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());

});


AppDataSource.initialize()
    .then(() => {
        console.log(`⚡️[database]: Соединение с базой данных выполнено успешно...`);
        server.listen(PORT, () => {
          console.log(`⚡️[server]: Сервер запущен и доступен по адресу https://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log(error));


