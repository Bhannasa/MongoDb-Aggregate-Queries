const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$group: {avgAge: {$avg: "$age"}, _id: 0, maxAge: {$max: "$age"}, minAge: {$min: "$age"}}}
    ]);
    console.log(persons)
}
main();