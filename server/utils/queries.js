import { gql } from '@apollo/client';

export const GET_PETS = gql`
  query GetPets {
    pets {
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
