// Import the required dependencies and models
const db = require('../config/db');
const Pet = require('../models/Pet');
const User = require('../models/User');
const petSeeds = require('./petSeeds.json');
const userSeeds = require('./userSeeds.json');

// Wait for the database connection to open before seeding the database
db.once('open', async () => {
    try {
      await Pet.deleteMany({});
      await User.deleteMany({});
  
      await User.create(userSeeds);
  
      for (let i = 0; i < petSeeds.length; i++) {
        const { _id, owner } = await Pet.create(petSeeds[i]);
        const user = await User.findOneAndUpdate(
          { name: owner },
          {
            $addToSet: {
              pets: _id,
            },
          }
        );
      }
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  