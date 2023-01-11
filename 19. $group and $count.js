const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;
    persons = await PersonsSchema.aggregate([
        {$group: { _id: {eyeColor: "$eyeColor", gender: "$gender"}}},
        {$count: "eyeColorAndGender"}
    ]); 
    
    console.log(persons)
}
main();