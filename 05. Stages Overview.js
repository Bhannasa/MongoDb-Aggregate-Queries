const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;
    persons = await PersonsSchema.aggregate([
        {$match: { age: {$gt: 20}}}
    ])
    console.log(persons);
    
    persons = await PersonsSchema.aggregate([
        {$group: { _id: "$age"}}
    ])
    // console.log(persons);

    persons = await PersonsSchema.aggregate([
        {$sort: { age: -1}}
    ])
    // console.log(persons);

    /*
    Other operators:
        $match
        $group
        $project
        $sort
        $count
        $limit
        $skip
        $out
     */
}
main();