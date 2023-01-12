const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {}
    ]);
    /**
     * Some of unary operators are: (usually used with $project stage)
     * $type
     * $or
     * $lt
     * $gt
     * $and
     * $multiply
     */

    /** Difference between accumulators and unary operators:
     * accumulators perform operation of a complete group of documents
     * unary performs operation on each document
     */
    console.log(persons)
}
main();