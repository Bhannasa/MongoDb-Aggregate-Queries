const { Schema, default: mongoose } = require("mongoose");

const PersonsSchema = new Schema({
    index: { type: Number },
    name: { type: String },
    isActive: { type: Boolean },
    registered: { type: Date },
    age: { type: Number },
    gender: { type: String, enum: ['female','male']},
    eyeColor: { type: String, enum: ['green','blue', 'brown']},
    favoriteFruit: { type: String, enum: ['strawberry','apple', 'banana']},
    company: {
      title: { type: String },
      email: { type: String },
      phone: { type: String },
      location: {
        country: { type: String },
        address: { type: String }
      }
    },
    tags: [{ type: String }]
})
module.exports = mongoose.model('persons', PersonsSchema)