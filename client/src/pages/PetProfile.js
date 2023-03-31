// PetProfile.js
import React from "react";
import { useParams } from "react-router-dom";
import pets from "../data/pets";

const PetProfile = () => {
  const { id } = useParams();
  const pet = pets.find((pet) => pet.id === id);

  const {
    name,
    species,
    breed,
    gender,
    age,
    weight,
    allergies,
    medications,
    feedingSchedule,
  } = pet;

  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p>Species: {species}</p>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age}</p>
      <p>Weight: {weight} lbs</p>
      <p>Allergies: {allergies}</p>
      <p>Medications: {medications}</p>
      <p>Feeding Schedule: {feedingSchedule}</p>
    </div>
  );
};

export default PetProfile;
