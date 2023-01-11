const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    
    persons = await PersonsSchema.aggregate([
        {$count: "allDocumentsCount"}
    ]);

    console.log(persons)
}
main();