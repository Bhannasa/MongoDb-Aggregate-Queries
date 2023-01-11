const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$count: "age"}
    ]);
    
    persons = await PersonsSchema.aggregate([
        {$count: "name"}
    ]);

    console.log(persons)
}
main();