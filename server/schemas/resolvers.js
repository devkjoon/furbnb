const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User, Pet, Booking } = require('../models');
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

    pets: async (parent, args, context, info) => {
      if (context.user._id) {
        // Returns all pets for the specified user
        return await Pet.find({ owner: context.user._id }).populate('owner');
      } else {
        // Returns all pets and their owners
        return await Pet.find().populate('owner');
      }
    },

    bookings: async () => {
      const bookings = await Booking.find().populate('pet');
      return bookings.map((booking) => {
        return {
          _id: booking._id.toString(),
          pet: booking.pet,
          serviceType: booking.serviceType,
          date: booking.date,
          startTime: booking.startTime,
          endTime: booking.endTime,
          notes: booking.notes
        };
      });
    },
    

    pet: async (parent, { id }) => {
      // Returns a pet and its owner by the pet's ID
      return await Pet.findById(id).populate('owner');
    },
  },
  Booking: {
    petInfo: async (booking) => {
      const pet = await Pet.findById(booking.pet);
      return pet;
    },
  },
  Mutation: {
    addUser: async (parent, { firstName, lastName, password, email }) => {
      // Creates a new user
      const user = await User.create({ firstName, lastName, password, email });
      const token = signToken(user);
      console.log(token)

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        throw new AuthenticationError("Invalid Email Format");
      }
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Invalid Email");
      }
      const passwordCheck = await user.isCorrectPassword(password);
      if (!passwordCheck) {
        throw new AuthenticationError("Invalid Password");
      }
      // console.log(user)
      const token = signToken(user);

      return { token, user };
    },

    createPet: async (parent, { name, species, breed, age, weight, allergies, medications, feedingSchedule, image, ownerId }) => {
      // Creates a new pet
      const pet = new Pet({ name, species, breed, age, weight, allergies, medications, feedingSchedule, image, owner: ownerId });
      await pet.save();

      // Adds the new pet's ID to the owner's list of pets
      await User.findByIdAndUpdate(ownerId, { $push: { pets: pet._id } });

      return pet;
    },

    updateUser: async (parent, { id, firstName, lastName, email, password }) => {
      // Updates a user's information by their ID
      const user = await User.findByIdAndUpdate(
        id,
        { firstName, lastName, email, password },
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
    addPet: async (
      parent,
      { name, species, breed, gender, age, weight, allergies, medications, feedingSchedule, image },
      context
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
        owner: context.user._id
      });

      return pet;
    },
    deletePet: async (parent, { id }) => {
      // Deletes a pet by its ID
      const pet = await Pet.findByIdAndDelete(id);

      // Removes the pet's ID from the owner's list of pets
      await User.findByIdAndUpdate(pet.owner, { $pull: { pets: id } });

      return pet;
    },

    createBooking: async (parent, args, context) => {
      const { petName, serviceType, date, startTime, endTime, notes } = args.input;
      const pet = await Pet.findOne({ name: petName });

      if (!pet) {
        throw new UserInputError('Invalid input', {
          invalidArgs: ['petName'],
        });
      }

      const booking = new Booking({
        pet,
        serviceType,
        date,
        startTime,
        endTime,
        notes,
      });

      try {
        const savedBooking = await booking.save();
        await pet.bookings.push(savedBooking);
        await pet.save();
        return savedBooking;
      } catch (err) {
        throw new UserInputError(err.message, {
          invalidArgs: args.input,
        });
      };
    },
    deleteBooking: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authenticated');
      }
    
      const booking = await Booking.findByIdAndDelete(id);
    
      return booking;
    },    
  },
};

module.exports = resolvers;