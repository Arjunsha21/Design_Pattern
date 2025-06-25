interface Prototype<T> {
    clone(): T;
}

class CustomDocument implements Prototype<CustomDocument> {
    constructor(
        public title: string,
        public body: string,
        public footer: string,
        public watermark: string
    ) {}

    public display(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Body: ${this.body}`);
        console.log(`Footer: ${this.footer}`);
        console.log(`Watermark: ${this.watermark}`);
    }

    public clone(): CustomDocument {
        return new CustomDocument(this.title, this.body, this.footer, this.watermark);
    }
}

// Example usage with prototype
console.log("\nWITH PROTOTYPE:");

const baseTemplate = new CustomDocument("Template Title", "Template Body", "Template Footer", "Confidential");

const doc1 = baseTemplate.clone();
doc1.title = "User Guide";
doc1.body = "This is the user guide body.";

const doc2 = baseTemplate.clone();
doc2.title = "Admin Manual";
doc2.body = "This is the admin manual body.";

doc1.display();
doc2.display();

// class Document {
//     constructor(
//         public title: string,
//         public body: string,
//         public footer: string,
//         public watermark: string
//     ) {}

//     public display(): void {
//         console.log(`Title: ${this.title}`);
//         console.log(`Body: ${this.body}`);
//         console.log(`Footer: ${this.footer}`);
//         console.log(`Watermark: ${this.watermark}`);
//     }
// }

// // Example usage without prototype
// console.log("WITHOUT PROTOTYPE:");

// const baseTemplate = new Document("Template Title", "Template Body", "Template Footer", "Confidential");

// const doc1 = new Document(baseTemplate.title, baseTemplate.body, baseTemplate.footer, baseTemplate.watermark);
// doc1.title = "User Guide";
// doc1.body = "This is the user guide body.";

// const doc2 = new Document(baseTemplate.title, baseTemplate.body, baseTemplate.footer, baseTemplate.watermark);
// doc2.title = "Admin Manual";
// doc2.body = "This is the admin manual body.";

// doc1.display();
// doc2.display();
