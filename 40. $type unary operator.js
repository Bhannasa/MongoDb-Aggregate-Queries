const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$project: {ageType: {$type: "$age"} , _id: 0}},
        {$group: {_id: "$ageType"}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$project: {nameType: {$type: "$name"} , _id: 0}},
        {$group: {_id: "$nameType"}}
    ]);

    persons = await PersonsSchema.aggregate([
        {$project: {companyType: {$type: "$company"} , _id: 0}},
        {$group: {_id: "$companyType"}}
    ]);
    console.log(persons)
}
main();