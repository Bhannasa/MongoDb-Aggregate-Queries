const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$project: { eyeColor: 0, age: 0}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$project: {_id: 0, name: 1, index: 1, age: 1, sum: {$add: ["$index", "$age"]}}}
    ]);
    
    persons = await PersonsSchema.aggregate([
        {$project: { name: 1, newAge: "$age"}}
    ]);

    console.log(persons)
}
main();