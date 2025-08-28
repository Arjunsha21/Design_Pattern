export class FactoryError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "FactoryError";
    }
}


