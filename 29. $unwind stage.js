const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$unwind: "$tags"}
    ]);
    // splits one document with array elements into several documents
    /*
    eg: 
        [{
            name: 'adi',
            tags: 'science', 'salesforce', 'good'
        }]
        document after $unwind: "$tags" will be
        [{
            name: 'adi',
            tags: 'science'
        }
        {
            name: 'adi',
            tags: 'salesforce'
        }
        {
            name: 'adi',
            tags: 'good'
        }]
    */
    console.log(persons)
}
main();