const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;


    persons = await PersonsSchema.aggregate([
        // stage 1
        {$group: {_id: {eye: "$eyeColor", fruit: "$favoriteFruit"}}},
        // stage 2
        {$match: {"gender": "male"}}
    ]);
    console.log(persons)
}
main();