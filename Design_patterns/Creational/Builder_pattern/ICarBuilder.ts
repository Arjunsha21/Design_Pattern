import { Car } from "./Car";

export interface ICarBuilder {
    setEngine(engine: string): ICarBuilder;
    setTransmission(transmission: string): ICarBuilder;
    setSunroof(sunroof: boolean): ICarBuilder;
    setGPS(gps: boolean): ICarBuilder;
    setAirbags(airbags: number): ICarBuilder;
    build(): Car;
}


