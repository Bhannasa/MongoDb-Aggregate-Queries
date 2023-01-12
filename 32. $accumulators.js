const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {}
    ]);
    /** 
     * accumulators are: (mostly used in $group stage)
     *  $sum
     *  $avg
     *  $max
     *  $min
     */
    console.log(persons)
}
main();