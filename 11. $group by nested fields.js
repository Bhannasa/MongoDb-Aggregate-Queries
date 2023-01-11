const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$group: {_id:"$company.location.country"}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$group: {_id:"$company.title"}}
    ]);
    console.log(persons)
}
main();