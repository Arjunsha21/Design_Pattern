import { CustomDocument } from "./models/CustomDocument";

console.log("\nWITH PROTOTYPE:");

try {
    const baseTemplate = new CustomDocument("Template Title", "Template Body", "Template Footer", "Confidential");

    const doc1 = baseTemplate.clone();
    doc1.title = "User Guide";
    doc1.body = "This is the user guide body.";

    const doc2 = baseTemplate.clone();
    doc2.title = "Admin Manual";
    doc2.body = "This is the admin manual body.";

    doc1.display();
    doc2.display();

} catch (error) {
    console.error("Error: " + (error as Error).message);
}


