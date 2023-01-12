const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$limit: 100},
        // {$match: {age: {$gt: 27}}},
        {$group: { _id: "$company.location.country", count: {$count: {}}}}
    ]);
    console.log(persons)
}
main();