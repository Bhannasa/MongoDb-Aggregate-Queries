const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    const persons = await PersonsSchema.aggregate([
        {$count: "total"}
    ]);
    console.log(persons)
}
main();