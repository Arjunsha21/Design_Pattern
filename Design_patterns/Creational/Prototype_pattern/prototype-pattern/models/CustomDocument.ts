import { Prototype } from "../interfaces/Prototype";

export class CustomDocument implements Prototype<CustomDocument> {
    constructor(
        public title: string,
        public body: string,
        public footer: string,
        public watermark: string
    ) {
        if (!title || !body) {
            throw new Error("Document must have a title and body.");
        }
    }

    public display(): void {
        console.log(`\n--- Document ---`);
        console.log(`Title: ${this.title}`);
        console.log(`Body: ${this.body}`);
        console.log(`Footer: ${this.footer}`);
        console.log(`Watermark: ${this.watermark}`);
        console.log(`----------------`);
    }

    public clone(): CustomDocument {
        try {
            return new CustomDocument(this.title, this.body, this.footer, this.watermark);
        } catch (error) {
            throw new Error("Error while cloning document: " + (error as Error).message);
        }
    }
}


