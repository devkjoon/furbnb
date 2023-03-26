import { gql } from '@apollo/client';
const GET_PETS = gql`
  query GetPets {
    pets {
      ...PetFields
    }
  }
  ${PET_FIELDS}
`;

export const PET_FIELDS = gql`
  fragment PetFields on Pet {
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
`;
