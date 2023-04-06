const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    address: String
    phoneNumber: String
    pets: [Pet]
  }

  type Pet {
    _id: ID
    name: String
    species: String
    breed: String
    gender: String
    age: String
    weight: String
    allergies: String
    medications: String
    feedingSchedule: String
    image: String
    owner: User
  }

  input PetInput {
    _id: ID!
    name: String!
  }

  input BookingInput {
    pet: PetInput!
    serviceType: String!
    date: String!
    startTime: String!
    endTime: String!
    notes: String
  }

  type Booking {
    _id: ID!
    user: User!
    pet: String
    serviceType: String!
    date: String!
    startTime: String!
    endTime: String!
    notes: String
    petInfo: Pet
  }
  

  type Mutation {
    createBooking(input: BookingInput!): Booking!
    updateBooking(id: ID!, input: BookingInput!): Booking!
    deleteBooking(id: ID!): Booking!
    addUser(firstName: String, lastName: String, email: String, password: String, address: String, phoneNumber: String): Auth
    login(email: String!, password: String!): Auth
    createPet(name: String!, species: String!, breed: String!, age: String!, weight: String!, allergies: String, medications: String, feedingSchedule: String, ownerId: ID!): Pet!
    updateUser(id: ID!, firstName: String, lastName: String, email: String, password: String): User
    updatePet(id: ID!, name: String, species: String, breed: String, gender: String, age: String, weight: String, allergies: String, medications: String, feedingSchedule: String, ownerId: ID): Pet
    deleteUser(id: ID!): User
    deletePet(id: ID!): Pet
    addPet(
      name: String!,
      species: String!,
      breed: String!,
      gender: String!,
      age: Int!,
      weight: Int!,
      allergies: String,
      medications: String,
      feedingSchedule: String,
      image: String
    ): Pet
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    pets: [Pet]!
    pet(id: ID!): Pet
    bookings: [Booking]
  }
`;

module.exports = typeDefs;
