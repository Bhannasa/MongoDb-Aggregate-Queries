const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();

    let persons;
    persons = await PersonsSchema.aggregate([
        {$sort: {age: 1, name: -1}}
    ]); 
    
    persons = await PersonsSchema.aggregate([
        {$sort: {"company.title": -1}}
    ]); 

    console.log(persons)
}
main();