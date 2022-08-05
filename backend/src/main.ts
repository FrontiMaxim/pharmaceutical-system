import express, {Express, json, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


import { AppDataSource } from './data-source';
import { PharmacyServices } from './pharmacy/pharmacy.services';
import { Pharmacy } from './pharmacy/pharmacy.entity';
import { MedicamentServices } from './medicament/medicament.services';
import { Medicament } from './medicament/medicament.entity';
import { AvailabilitytServices } from './availability/availability.services';
import { Availability } from './availability/availability.entity';

const server: Express = express();
const PORT = 8080;

const PATH_PHARMACY: string = '/pharmacy';
const PATH_MEDICAMENT: string = '/medicament';
const PATH_AVAILABILITY: string = '/availability';

const pharmacyServices: PharmacyServices = new PharmacyServices();
const medicamentServices: MedicamentServices = new MedicamentServices();
const availabilityServices: AvailabilitytServices = new AvailabilitytServices();

server.use(json());

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


// AVAILABILITY CRUD

server.get(PATH_AVAILABILITY, (req: Request, res: Response) => {

    if(req.query.id) {
        const id: number = Number(req.query.id);

        availabilityServices.getAvailability(id)
            .then(data => res.status(StatusCodes.OK).send(data))
            .catch(() => res.status(StatusCodes.NOT_FOUND).send());
    } else {
        availabilityServices.getAllAvailabilities()
            .then(data => res.status(StatusCodes.OK).send(data))
    }
});


server.post(PATH_AVAILABILITY, (req: Request, res: Response) => {

    const newAvailability: Availability = req.body as Availability;

    availabilityServices.createAvailability(newAvailability)
        .then(() => res.status(StatusCodes.CREATED).send())
        .catch(() =>  res.status(StatusCodes.BAD_REQUEST).send());
});


server.delete(PATH_AVAILABILITY, (req: Request, res: Response) => {

    const id: number = Number(req.query.id);

    availabilityServices.removeAvailability(id)
        .then(() => res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());
});


server.put(PATH_AVAILABILITY, (req: Request, res: Response) => {
    const id: number = Number(req.query.id);
    const newAvailability: Availability = req.body as Availability;

    availabilityServices.updateAvailability(id, newAvailability)
        .then(() =>  res.status(StatusCodes.OK).send())
        .catch(() => res.status(StatusCodes.BAD_REQUEST).send());

});


server.get('/', (req: Request, res: Response) => {
  res.send("Привет!");
})


AppDataSource.initialize()
    .then(() => {
        console.log(`⚡️[database]: Соединение с базой данных выполнено успешно...`);
        server.listen(PORT, () => {
          console.log(`⚡️[server]: Сервер запущен и доступен по адресу https://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log(error));


