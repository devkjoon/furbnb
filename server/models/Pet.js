const { Schema, model } = require('mongoose');

const petSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  allergies: {
    type: String,
  },
  medications: {
    type: String,
  },
  feedingSchedule: {
    type: String,
  },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;
