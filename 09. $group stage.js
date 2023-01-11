const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$group: {_id : "$age"}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$group: {_id : {oomar:"$age", sex: "$gender" }}}
    ]);
    console.log(persons)
}
main();