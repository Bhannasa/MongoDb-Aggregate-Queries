### MongoDB Aggregation
### Tuts from [Bogdan Stashchuk](https://youtube.com/playlist?list=PLWkguCWKqN9OwcbdYm4nUIXnA2IoXX0LI)
---
boiler plate code:
```js
const connect = require('./db/connection');
const PersonsSchema = require("./db/PersonsSchema");

const main = async () => {
    await connect();
    let persons;

    persons = await PersonsSchema.aggregate([
        {}
    ]);
    console.log(persons)
}
main();
```

any required notes will be appended here...
