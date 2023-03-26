// Import the required dependencies and models
const db = require('../config/connection');
const { Pet } = require('../models/Pet');
const petSeeds = require('./petSeeds.json');

// Wait for the database connection to open before seeding the database
db.once('open', async () => {
try {
// Remove any existing pet documents from the database
await Pet.deleteMany({});

// Add the pets in the petSeeds.json file to the database
await Pet.create(petSeeds);
} catch (err) {
// If there's an error, log it to the console and exit the process with an error code
console.error(err);
process.exit(1);
}

// If seeding is successful, log a message to the console and exit the process with a success code
console.log('all done!');
process.exit(0);
});

// This code seeds the database with pet documents by removing any existing documents and adding the pets in the petSeeds.json file to the database. It logs a message to the console when the process is complete.