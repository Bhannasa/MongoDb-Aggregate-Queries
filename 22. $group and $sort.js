const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();

    let persons;
    
    persons = await PersonsSchema.aggregate([
        {$group: {_id: "$favoriteFruit"}},
        {$sort: {_id: -1}}
    ]); 

    persons = await PersonsSchema.aggregate([
        {$group: {_id: {eye: "$eyeColor", fruit: "$favoriteFruit"}}},
        {$sort: {_id: 1}}
    ]); 

    console.log(persons)
}
main();