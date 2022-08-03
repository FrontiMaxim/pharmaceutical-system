import express, {Express, Request, Response } from 'express';
import { AppDataSource } from './data-source';


const app: Express = express();
const PORT = 8080;

app.get('/', (req: Request, res: Response) => {
  res.send('!');
});


AppDataSource.initialize()
    .then(() => {
        console.log(`⚡️[database]: Соединение с базой данных выполнено успешно...`);
        app.listen(PORT, () => {
          console.log(`⚡️[server]: Сервер запущен и доступен по адресу https://localhost:${PORT}`);
        });
    })
    .catch((error) => console.log(error));

