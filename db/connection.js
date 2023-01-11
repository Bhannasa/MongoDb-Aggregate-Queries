const mongoose = require("mongoose");
const Persons = require("./PersonsSchema");
const CONNECTION_URL = "mongodb://localhost:27017/test"
const connect = async () => {
    try{
        await mongoose.set('strictQuery', true);
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('connected')
        // const persons = mongoose.model('persons', PersonsSchema);
        // console.log(await persons.findOne())
        // return persons;
        return true;
    }catch(error){
        console.log(`${error} did not connect`);
        return false;
    }
}
module.exports = connect;