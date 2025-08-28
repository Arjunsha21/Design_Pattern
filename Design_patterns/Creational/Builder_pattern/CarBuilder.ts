import { Car } from "./Car";
import { ICarBuilder } from "./ICarBuilder";

export class CarBuilder implements ICarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    public setEngine(engine: string): ICarBuilder {
        if (!engine) throw new Error("Engine type must be provided");
        this.car.engine = engine;
        return this;
    }

    public setTransmission(transmission: string): ICarBuilder {
        if (!["Manual", "Automatic"].includes(transmission)) {
            throw new Error("Transmission must be either 'Manual' or 'Automatic'");
        }
        this.car.transmission = transmission;
        return this;
    }

    public setSunroof(sunroof: boolean): ICarBuilder {
        this.car.sunroof = sunroof;
        return this;
    }

    public setGPS(gps: boolean): ICarBuilder {
        this.car.gps = gps;
        return this;
    }

    public setAirbags(airbags: number): ICarBuilder {
        if (airbags < 0) throw new Error("Airbags cannot be negative");
        this.car.airbags = airbags;
        return this;
    }

    public build(): Car {
        if (!this.car.engine) throw new Error("Car must have an engine");
        if (!this.car.transmission) throw new Error("Car must have a transmission");
        return this.car;
    }
}


