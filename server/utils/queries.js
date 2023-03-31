import { gql } from '@apollo/client';

export const GET_PETS = gql`
  query GetPets($userId: ID) { // Add the userId variable here
    pets(userId: $userId) { // Pass the userId variable to the pets query
      id
      name
      species
      breed
      age
      gender
      weight
      allergies
      medications
      feedingSchedule
      image
    }
  }
`;
