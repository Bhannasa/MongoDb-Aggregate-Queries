const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    // persons = await PersonsSchema.aggregate([
    //     {}
    // ]);
    // console.log(persons)
    console.log('$limit is used to limit to first n documents only')
}
main();