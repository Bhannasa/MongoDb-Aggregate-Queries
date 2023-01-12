const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    
    persons = await PersonsSchema.aggregate([
        {$project: { name: 1, "company.title": 1, country: "$company.location.country" }}
    ]);

    console.log(persons)
}
main();