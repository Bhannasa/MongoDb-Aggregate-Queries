const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$unwind: "$tags"},
        {$project: {name: 1, tags: 1}}
    ]);
    console.log(persons)
}
main();