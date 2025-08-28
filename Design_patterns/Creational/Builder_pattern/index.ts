import { CarBuilder } from "./CarBuilder";

console.log("\nWITH BUILDER:");

try {
    const car1 = new CarBuilder()
        .setEngine("Petrol")
        .setTransmission("Manual")
        .setSunroof(true)
        .setGPS(false)
        .setAirbags(2)
        .build();

    const car2 = new CarBuilder()
        .setEngine("Electric")
        .setTransmission("Automatic")
        .setSunroof(false)
        .setGPS(true)
        .setAirbags(6)
        .build();

    car1.specs();
    car2.specs();

    const badCar = new CarBuilder()
        .setEngine("")
        .setTransmission("FlyingGear")
        .build();

    badCar.specs();

} catch (error) {
    if (error instanceof Error) {
        console.error("❌ Error while building car:", error.message);
    }
}


