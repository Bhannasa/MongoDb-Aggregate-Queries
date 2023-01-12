const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$unwind: "$tags"},
        {$group: {_id: "$tags", count: { $count: {}}}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$unwind: "$tags"},
        {$group: {_id: "$tags", count: { $count: {}}}},
        {$sort: {count: -1}}
    ]);
    console.log(persons)
}
main();