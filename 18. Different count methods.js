const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    // ! time = 1.7sec
    // persons = await PersonsSchema.aggregate([
    //     {$match: { $or: [{gender: "male"}, {gender: "female"}]}}
    // ]).toArray().length; // not a js function

    // ! time = 1.4sec
    // persons = await PersonsSchema.aggregate([
    //     {$match: { $or: [{gender: "male"}, {gender: "female"}]}}
    // ]).itCount(); // not a js function

    // ! time = 0.21sec
    persons = await PersonsSchema.aggregate([
        {$match: { $or: [{gender: "male"}, {gender: "female"}]}},
        {$count: "total"}
    ]); 
    
    // ! time = 0.21sec
    persons = await PersonsSchema.find().count()
    console.log(persons)
}
main();