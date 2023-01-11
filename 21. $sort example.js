const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();

    let persons;
    
    persons = await PersonsSchema.aggregate([
        {$sort: {age: -1, gender: -1, eyeColor: 1}}
    ]); 

    console.log(persons)
}
main();