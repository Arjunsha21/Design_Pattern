export class Car {
    public engine!: string;
    public transmission!: string;
    public sunroof!: boolean;
    public gps!: boolean;
    public airbags!: number;

    public specs(): void {
        console.log(
            `Car with ${this.engine} engine, ${this.transmission} transmission, ` +
            `${this.sunroof ? 'sunroof' : 'no sunroof'}, ` +
            `${this.gps ? 'GPS' : 'no GPS'}, ` +
            `${this.airbags} airbags.`
        );
    }
}


