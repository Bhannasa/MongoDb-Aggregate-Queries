const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    console.log(await connect());
    // const persons = await connect();
    console.log(await PersonsSchema.find())
}
main();