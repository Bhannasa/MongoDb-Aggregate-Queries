const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    
    persons = await PersonsSchema.aggregate([
        {$project: { 
            _id: 0,
            name: 1,
            info: {
                eyes: "$eyeColor",
                fruit: "$favoriteFruit",
                country: "$company.location.country"
            }
        }}
    ]);

    console.log(persons)
}
main();