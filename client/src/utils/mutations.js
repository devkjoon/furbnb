import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user{
        _id
        name
        email}
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($name: String, $email: String, $password: String) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user{
        _id
        name
        email}
    }
  }
`;

export const ADD_PET = gql`
  mutation addPet(
    $name: String!
    $species: String!
    $breed: String!
    $age: Int!
    $gender: String!
    $weight: Int!
    $allergies: String
    $medications: String
    $feedingSchedule: String
  ) {
    addPet(
      name: $name
      species: $species
      breed: $breed
      age: $age
      gender: $gender
      weight: $weight
      allergies: $allergies
      medications: $medications
      feedingSchedule: $feedingSchedule
    ) {
      _id
      name
      species
      breed
      gender
      age
      weight
      allergies
      medications
      feedingSchedule
    }
  }
`;

export const REMOVE_PET = gql`
  mutation removePet($_id: ID!) {
    removePet(_id: $_id) {
      _id
      name
      species
      breed
      gender
      age
      weight
      allergies
      medications
      feedingSchedule
    }
  }
`;

export const UPDATE_PET = gql`
  mutation updatePet(
    $_id: ID!
    $name: String
    $species: String
    $breed: String
    $age: Int
    $gender: String
    $weight: Int
    $allergies: String
    $medications: String
    $feedingSchedule: String
  ) {
    updatePet(
      _id: $_id
      name: $name
      species: $species
      breed: $breed
      age: $age
      gender: $gender
      weight: $weight
      allergies: $allergies
      medications: $medications
      feedingSchedule: $feedingSchedule
    ) {
      _id
      name
      species
      breed
      gender
      age
      weight
      allergies
      medications
      feedingSchedule
    }
  }
`;
