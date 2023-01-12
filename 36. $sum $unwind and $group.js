const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        { $unwind: "$tags" },
        {
            $group: {
                _id: "$tags",
                count: { $sum: 1 }
            }
        }
    ]);

    persons = await PersonsSchema.aggregate([
        { $unwind: "$tags" },
        {
            $group: {
                _id: "$tags",
                count: { $sum: 1 }
            }
        },
        {
            $group: {
                _id: 0,
                totalTagsCount: { $sum: "$count"},
                uniqueTagsCount: { $sum: 1}
            }
        }
    ]);
    console.log(persons)
}
main();