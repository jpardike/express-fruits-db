const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Blueprint (Keeps our data consistent)
const fruitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  color: String,
  readyToEat: Boolean,
}, {timestamps: true});


// Fruit Model allows us to query the Fruit collection
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
