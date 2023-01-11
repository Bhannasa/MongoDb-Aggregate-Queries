const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$group: {_id: "$company.location.country"}}
    ]);
    // console.log(persons)
    
    persons = await PersonsSchema.aggregate([
        {$group: {_id: "$name", total: {$sum: "$age"}}}
    ]);
    console.log(persons)
}
main();