import { gql } from '@apollo/client';
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
    feedingSchedule {
      type
      description
    }
    owner {
      _id
      name
      email
    }
    vet {
      _id
      name
      phone
    }
  }
`;
