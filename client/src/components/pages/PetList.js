import React from "react";
import { Link } from "react-router-dom";

const PetList = () => {
  const pets = [
    {
      id: 1,
      name: "Buddy",
      species: "Dog",
      breed: "Golden Retriever",
      gender: "Male",
      age: "3 years",
      weight: "70 lbs",
      allergies: "None",
      medications: "None",
      feedingSchedule: "Morning: 1 cup kibble, Evening: 1 cup kibble",
    },
    {
      id: 2,
      name: "Whiskers",
      species: "Cat",
      breed: "Siamese",
      gender: "Female",
      age: "1 year",
      weight: "8 lbs",
      allergies: "None",
      medications: "None",
      feedingSchedule: "Morning: 1/4 cup kibble, Evening: 1/4 cup kibble",
    },
    {
      id: 3,
      name: "Max",
      species: "Dog",
      breed: "German Shepherd",
      gender: "Male",
      age: "5 years",
      weight: "90 lbs",
      allergies: "None",
      medications: "None",
      feedingSchedule: "Morning: 1 cup kibble, Evening: 1 cup kibble",
    },
    {
      id: 4,
      name: "Fluffy",
      species: "Cat",
      breed: "Persian",
      gender: "Male",
      age: "2 years",
      weight: "12 lbs",
      allergies: "None",
      medications: "None",
      feedingSchedule: "Morning: 1/4 cup kibble, Evening: 1/4 cup kibble",
    },
    {
      id: 5,
      name: "Rex",
      species: "Dog",
      breed: "Labrador Retriever",
      gender: "Male",
      age: "4 years",
      weight: "80 lbs",
      allergies: "None",
      medications: "None",
      feedingSchedule: "Morning: 1 cup kibble, Evening: 1 cup kibble",
    },
  ];

  return (
    <div>
      <h2>Pet List</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>
            <Link to={`/pets/${pet.id}`}>{pet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
