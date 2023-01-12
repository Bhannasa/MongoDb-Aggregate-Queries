const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$group: {_id: "$eyeColor", avgAge: {$avg: "$age"}}}
    ]);
    console.log(persons)
}
main();