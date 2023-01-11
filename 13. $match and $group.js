const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;


    persons = await PersonsSchema.aggregate([
        // stage 1
        {$match: {favoriteFruit: "banana"}},
        // stage 2
        {$group: {_id: {eye: "$eyeColor", fruit: "$favoriteFruit"}}}
    ]);
    console.log(persons)
}
main();