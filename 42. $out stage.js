const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {$match: {gender: 'female'}},
        {"$out": "outPersons"}
    ]);
    /**
     * out stage must be the last stage in aggragation pipeline
     * if output collection doesn't exist it will be created automatically
     */
    console.log(persons)
}
main();