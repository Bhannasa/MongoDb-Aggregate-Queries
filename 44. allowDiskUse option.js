const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;
    /**
     * all aggregation stages can use a maximum of 100MB of RAM
     * Server will return error if this memory is exceeded
     * allowDiskUse will allow mongo to write in temporal files for further operations
     */
    persons = await PersonsSchema.aggregate([
        {$project: { _id: 0, name: 1, age: 1}}
    ], {allowDiskUse: true});
    console.log(persons)
}
main();