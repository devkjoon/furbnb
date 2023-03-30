const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    pets: [Pet!]!
    pet(id: ID!): Pet
  }

  type Mutation {
    addUser(name: String, email: String, password: String): Auth

    login(email: String!, password: String!): Auth
    createPet(name: String!, species: String!, breed: String!, age: String!, weight: String!, allergies: String, medications: String, feedingSchedule: String, ownerId: ID!): Pet!

    updateUser(id: ID!, name: String, email: String, password: String): User
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
`;

module.exports = typeDefs;
