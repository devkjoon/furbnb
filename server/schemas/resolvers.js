// const { AuthenticationError } = require('apollo-server-express');
const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      // Returns all users and their pets
      return await User.find().populate('pets');
    },

    user: async (parent, { id }) => {
      // Returns a user and their pets by their ID
      return await User.findById(id).populate('pets');
    },

    pets: async () => {
      // Returns all pets and their owners
      return await Pet.find().populate('owner');
    },

    pet: async (parent, { id }) => {
      // Returns a pet and its owner by the pet's ID
      return await Pet.findById(id).populate('owner');
    },
  },

  Mutation: {
    addUser: async (parent, {name,email,password}) => {
      // Creates a new user
      const user = await User.create({name,password,email});
      const token = signToken(user)

      return {token,user};
    },

    login: async(parent,{email,password},context) => {
      console.log(email, password)
      const user = await User.findOne({email})
      const passwordCheck = await user.isCorrectPassword(password)
      if(!passwordCheck){throw new AuthenticationError("Invalid Password")}
      const token = signToken(user)

      return {token,user};
    },

    createPet: async (parent, { name, species, breed, age, weight, allergies, medications, feedingSchedule, image, ownerId }) => {
      // Creates a new pet
      const pet = new Pet({ name, species, breed, age, weight, allergies, medications, feedingSchedule, image, owner: ownerId });
      await pet.save();

      // Adds the new pet's ID to the owner's list of pets
      await User.findByIdAndUpdate(ownerId, { $push: { pets: pet._id } });

      return pet;
    },

    updateUser: async (parent, { id, name, email, password }) => {
      // Updates a user's information by their ID
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, password },
        { new: true }
      ).populate('pets');

      return user;
    },

    updatePet: async (parent, { id, name, species, breed, age, ownerId }) => {
      // Updates a pet's information by its ID
      const pet = await Pet.findByIdAndUpdate(
        id,
        { name, species, breed, age, owner: ownerId },
        { new: true }
      ).populate('owner');

      return pet;
    },

    deleteUser: async (parent, { id }) => {
      // Deletes a user by their ID
      const user = await User.findByIdAndDelete(id);

      return user;
    },

    deletePet: async (parent, { id }) => {
      // Deletes a pet by its ID and removes its ID from the owner's list of pets
      const pet = await Pet.findByIdAndDelete(id);

      await User.findByIdAndUpdate(pet.owner, {
        $pull: { pets: pet._id },
      });

      return pet;
    },

    addPet: async (
      parent,
      { name, species, breed, gender, age, weight, allergies, medications, feedingSchedule, image }
    ) => {
      // Adds a new pet with its information
      const pet = await Pet.create({
        name,
        species,
        breed,
        gender,
        age,
        weight,
        allergies,
        medications,
        feedingSchedule,
        image,
      });

      return pet;
    },
  },
};

module.exports = resolvers;
