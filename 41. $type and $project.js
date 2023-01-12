const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$project: {companyType: {$type: "$company"}, ageType: {$type: "$age"}, name: 1 , _id: 0}},
    ]);
    console.log(persons)
}
main();