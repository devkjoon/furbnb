import { gql } from '@apollo/client';

export const ADD_PET = gql`
  mutation addPet($name: String!, $species: String!, $breed: String!, $age: Int!, $gender: String!, $weight: Int!, $allergies: String!, $medications: String!, $feedingSchedule: String!) {
    addPet(name: $name, species: $species, breed: $breed, age: $age, gender: $gender, weight: $weight, allergies: $allergies, medications: $medications, feedingSchedule: $feedingSchedule) {
      _id
      name
      species
      breed
      age
      gender
      weight
      allergies
      medications
      feedingSchedule
    }
  }
`;
