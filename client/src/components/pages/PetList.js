import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pet from "./Pet";

const PetList = () => {
  const [newPetName, setNewPetName] = useState("");
  const [newPetSpecies, setNewPetSpecies] = useState("");
  const [newPetBreed, setNewPetBreed] = useState("");
  const [newPetGender, setNewPetGender] = useState("");
  const [newPetAge, setNewPetAge] = useState("");
  const [newPetWeight, setNewPetWeight] = useState("");
  const [newPetAllergies, setNewPetAllergies] = useState("");
  const [newPetMedications, setNewPetMedications] = useState("");
  const [newPetFeedingSchedule, setNewPetFeedingSchedule] = useState("");

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

  const handleNewPetSubmit = (event) => {
    event.preventDefault();

    const newPet = new Pet({
      name: newPetName,
      species: newPetSpecies,
      breed: newPetBreed,
      gender: newPetGender,
      age: newPetAge,
      weight: newPetWeight,
      allergies: newPetAllergies,
      medications: newPetMedications,
      feedingSchedule: newPetFeedingSchedule,
    });

    newPet.save((err) => {
      if (err) return console.error(err);
      console.log("New pet saved to database");
    });

    setNewPetName("");
    setNewPetSpecies("");
    setNewPetBreed("");
    setNewPetGender("");
    setNewPetAge("");
    setNewPetWeight("");
    setNewPetAllergies("");
    setNewPetMedications("");
    setNewPetFeedingSchedule("");
  };

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

      <h2>Add New Pet</h2>
      <form onSubmit={handleNewPetSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={newPetName}
            onChange={(event) => setNewPetName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Species:
          <input
            type="text"
            value={newPetSpecies}
            onChange={(event) => setNewPetSpecies(event.target.value)}
          />
        </label>
        <br />
        <label>
          Breed:
          <input
            type="text"
            value={newPetBreed}
            onChange={(event) => setNewPetBreed(event.target.value)}
          />
        </label>
        <br />
        <label>
          Gender:
          <input
            type="text"
            value={newPetGender}
            onChange={(event) => setNewPetGender(event.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="text"
            value={newPetAge}
            onChange={(event) => setNewPetAge(event.target.value)}
          />
        </label>
        <br />
        <label>
          Weight:
          <input
            type="text"
            value={newPetWeight}
            onChange={(event) => setNewPetWeight(event.target.value)}
          />
        </label>
        <br />
        <label>
          Allergies:
          <input
            type="text"
            value={newPetAllergies}
            onChange={(event) => setNewPetAllergies(event.target.value)}
          />
        </label>
        <br />
        <label>
          Medications:
          <input
            type="text"
            value={newPetMedications}
            onChange={(event) => setNewPetMedications(event.target.value)}
          />
        </label>
        <br />
        <label>
          Feeding Schedule:
          <input
            type="text"
            value={newPetFeedingSchedule}
            onChange={(event) => setNewPetFeedingSchedule(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
};

export default PetList;
