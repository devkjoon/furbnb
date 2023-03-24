const db = require('../config/connection');
const { Pet } = require('../models/Pet');
const petSeeds = require('./petSeeds.json');

db.once('open', async () => {
  try {
    await Pet.deleteMany({});
    await Pet.create(petSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
