const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;


    persons = await PersonsSchema.aggregate([
        {$group: {_id: {eye: "$eyeColor", fruit: "$favoriteFruit"}}}
    ]);
    console.log(persons)
}
main();