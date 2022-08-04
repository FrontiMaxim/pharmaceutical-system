export class ErrorNotElement extends Error {
    constructor() {
        super();
        this.message = 'Ошибка! Отсутствует объект с данным id!';
    }
}