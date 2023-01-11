const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        { $match: {"company.location.country": "USA"}}
    ]);

    persons = await PersonsSchema.aggregate([
        { $match: { $and: [{gender: "female"}, {age: {$gt: 25}}]}}
    ]);
    console.log(persons)
}
main();