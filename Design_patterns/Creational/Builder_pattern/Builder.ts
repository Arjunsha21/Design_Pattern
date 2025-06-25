class Car {
    public engine!: string;
    public transmission!: string;
    public sunroof!: boolean;
    public gps!: boolean;
    public airbags!: number;

    public specs(): void {
        console.log(`Car with ${this.engine} engine, ${this.transmission} transmission, `
            + `${this.sunroof ? 'sunroof' : 'no sunroof'}, `
            + `${this.gps ? 'GPS' : 'no GPS'}, `
            + `${this.airbags} airbags.`);
    }
}

// Builder interface (optional in TypeScript, just using concrete here)
class CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car();
    }

    public setEngine(engine: string): CarBuilder {
        this.car.engine = engine;
        return this;
    }

    public setTransmission(transmission: string): CarBuilder {
        this.car.transmission = transmission;
        return this;
    }

    public setSunroof(sunroof: boolean): CarBuilder {
        this.car.sunroof = sunroof;
        return this;
    }

    public setGPS(gps: boolean): CarBuilder {
        this.car.gps = gps;
        return this;
    }

    public setAirbags(airbags: number): CarBuilder {
        this.car.airbags = airbags;
        return this;
    }

    public build(): Car {
        return this.car;
    }
}

// Example usage
console.log("\nWITH BUILDER:");
const car1 = new CarBuilder().setEngine("Petrol")
                    .setTransmission("Manual")
                    .setSunroof(true)
                    .setGPS(false)
                    .setAirbags(2)
                    .build();

const car2 = new CarBuilder().setEngine("Electric")
                    .setTransmission("Automatic")
                    .setSunroof(false)
                    .setGPS(true)
                    .setAirbags(6)
                    .build();

car1.specs();
car2.specs();


// //class Car {
//     constructor(
//         public engine: string,
//         public transmission: string,
//         public sunroof: boolean,
//         public gps: boolean,
//         public airbags: number
//     ) {}

//     public specs(): void {
//         console.log(`Car with ${this.engine} engine, ${this.transmission} transmission, `
//             + `${this.sunroof ? 'sunroof' : 'no sunroof'}, `
//             + `${this.gps ? 'GPS' : 'no GPS'}, `
//             + `${this.airbags} airbags.`);
//     }
// }

// // Example usage
// const car1 = new Car("Petrol", "Manual", true, false, 2);
// const car2 = new Car("Electric", "Automatic", false, true, 6);

// console.log("WITHOUT BUILDER:");
// car1.specs();
// car2.specs();