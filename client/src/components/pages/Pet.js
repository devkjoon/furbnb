const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  species: { type: String },
  breed: { type: String },
  gender: { type: String },
  age: { type: String },
  weight: { type: String },
  allergies: { type: String },
  medications: { type: String },
  feedingSchedule: { type: String },
});

module.exports = {
  petSchema,
  Pet: mongoose.model("Pet", petSchema),
};
