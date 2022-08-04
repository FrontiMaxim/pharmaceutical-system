export class ErrorCreateElement extends Error {
    constructor() {
        super();
        this.message = 'Ошибка! Не удалось создать объект!';
    }
}