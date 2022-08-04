import express, {Express, json, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


import { AppDataSource } from './data-source';
import { PharmacyServices } from './pharmacy/pharmacy.services';
import { Pharmacy } from './pharmacy/pharmacy.entity';

const server: Express = express();
const PORT = 8080;

const PATH_PHARMACY: string = '/pharmacy';

const pharmacyServices: PharmacyServices = new PharmacyServices();

server.use(json());


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


