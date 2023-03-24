const { AuthenticationError } = require('apollo-server-express');
const { User, Pet } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('pets');
    },

    user: async (parent, { id }) => {
      return await User.findById(id).populate('pets');
    },

    pets: async () => {
      return await Pet.find().populate('owner');
    },

    pet: async (parent, { id }) => {
      return await Pet.findById(id).populate('owner');
    },
  },

  Mutation: {
    createUser: async (parent, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();

      return user;
    },

    createPet: async (parent, { name, species, breed, age, ownerId }) => {
      const pet = new Pet({ name, species, breed, age, owner: ownerId });
      await pet.save();

      await User.findByIdAndUpdate(ownerId, { $push: { pets: pet._id } });

      return pet;
    },

    updateUser: async (parent, { id, username, email, password }) => {
      const user = await User.findByIdAndUpdate(
        id,
        { username, email, password },
        { new: true }
      ).populate('pets');

      return user;
    },

    updatePet: async (parent, { id, name, species, breed, age, ownerId }) => {
      const pet = await Pet.findByIdAndUpdate(
        id,
        { name, species, breed, age, owner: ownerId },
        { new: true }
      ).populate('owner');

      return pet;
    },

    deleteUser: async (parent, { id }) => {
      const user = await User.findByIdAndDelete(id);

      return user;
    },

    deletePet: async (parent, { id }) => {
      const pet = await Pet.findByIdAndDelete(id);

      await User.findByIdAndUpdate(pet.owner, {
        $pull: { pets: pet._id },
      });

      return pet;
    },

    addPet: async (
      parent,
      { name, species, breed, gender, age, weight, allergies, medications, feedingSchedule }
    ) => {
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
      });

      return pet;
    },
  },
};

module.exports = resolvers;
