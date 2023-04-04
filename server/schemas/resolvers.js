const { AuthenticationError } = require('apollo-server-express');
const { User, Pet, Bookings } = require('../models');
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
    bookings: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authenticated');
      }

      const bookings = await Bookings.find({ user: context.user._id })
        .populate('user')
        .populate('pet');

      return bookings;
    },
    pet: async (parent, { id }) => {
      // Returns a pet and its owner by the pet's ID
      return await Pet.findById(id).populate('owner');
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

    createBooking: async (parent, { input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authenticated');
      }

      const { pet, serviceType, date, startTime, endTime, notes } = input;
      const { user } = context;
      console.log(pet)
      // const petId = mongoose.Types.ObjectId(pet); // Convert pet to an ObjectId
      const booking = new Bookings({
        user,
        pet, // Use the converted ObjectId value for pet
        serviceType,
        date,
        startTime,
        endTime,
        notes,
      });

      const savedBooking = await booking.save();

      return savedBooking;
    },
    updateBooking: async (parent, { id, input }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authenticated');
      }

      const bookingToUpdate = await Bookings.findById(id);

      if (!bookingToUpdate) {
        throw new Error('Booking not found');
      }

      if (bookingToUpdate.user.toString() !== context.user._id.toString()) {
        throw new AuthenticationError('Not authorized');
      }

      bookingToUpdate.pet = input.pet || bookingToUpdate.pet;
      bookingToUpdate.serviceType = input.serviceType || bookingToUpdate.serviceType;
      bookingToUpdate.date = input.date || bookingToUpdate.date;
      bookingToUpdate.startTime = input.startTime || bookingToUpdate.startTime;
      bookingToUpdate.endTime = input.endTime || bookingToUpdate.endTime;
      bookingToUpdate.notes = input.notes || bookingToUpdate.notes;

      const updatedBooking = await bookingToUpdate.save();

      return updatedBooking;
    },
    deleteBooking: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError('Not authenticated');
      }

      const bookingToDelete = await Bookings.findById(id);

      if (!bookingToDelete) {
        throw new Error('Booking not found');
      }

      if (bookingToDelete.user.toString() !== context.user._id.toString()) {
        throw new AuthenticationError('Not authorized');
      }

      const deletedBooking = await bookingToDelete.delete();

      return deletedBooking;
    },

  },
};

module.exports = resolvers;