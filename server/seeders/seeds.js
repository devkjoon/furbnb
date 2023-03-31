const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');
const Pet = require('../models/Pet');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed data
const users = [
  {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: 'password123',
  },
  {
    username: 'janedoe',
    email: 'janedoe@example.com',
    password: 'password456',
  },
];

const pets = [
  {
    name: 'Fluffy',
    species: 'Cat',
    breed: 'Persian',
    gender: 'Female',
    age: '3 years',
    weight: '5 lbs',
    allergies: 'None',
    medications: 'None',
    feedingSchedule: 'Twice a day',
  },
  {
    name: 'Buddy',
    species: 'Dog',
    breed: 'Golden Retriever',
    gender: 'Male',
    age: '2 years',
    weight: '60 lbs',
    allergies: 'Pollen',
    medications: 'Antihistamine',
    feedingSchedule: 'Three times a day',
  },
];

// Seed function
async function seed() {
  try {
    // Clear existing data
    await User.deleteMany();
    await Pet.deleteMany();

    // Insert users
    const insertedUsers = await User.insertMany(
      users.map((user) => ({ _id: uuidv4(), ...user }))
    );

    // Insert pets
    const insertedPets = await Pet.insertMany(
      pets.map((pet, index) => ({
        _id: uuidv4(),
        ...pet,
        owner: insertedUsers[index % insertedUsers.length]._id,
      }))
    );

    console.log(`Inserted ${insertedUsers.length} users`);
    console.log(`Inserted ${insertedPets.length} pets`);
  } catch (err) {
    console.error(err);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
}

// Call seed function
seed();
