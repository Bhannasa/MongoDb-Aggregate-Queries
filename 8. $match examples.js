const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        // stage 1
        {$match: {tags: {$size: 3}}}
    ]);
    console.log(persons)
}
main();