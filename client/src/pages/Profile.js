import React from "react";
import { useQuery, gql } from "@apollo/client";
import PHUserImage from "../assets/images/Alexandria-pfp.PNG";
import "../assets/css/index.css";


const GET_PETS = gql`
  query GetPets {
    pets {
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
      image
    }
  }
`;


export default function UserProfile() {
  const { loading, error, data } = useQuery(
    GET_PETS
  );
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="profile-cont">
      <div className="profile-div">
        <aside>
          <img src={PHUserImage} alt="User Profile" />
          <h5>FirstName LastName</h5>
          <p>1234 Nowheresville Rd, Somewhere USA</p>
          <p>615-420-6969</p>
          <h6>Emergency Contact</h6>
          <ul>
            <li>FirstName LastName</li>
            <li>1234 Nowheresville Rd, Somewhere USA</li>
            <li>615-420-6969</li>
          </ul>
          <a href="/petlist">Add <span className="blue-span">Pet</span></a>
        </aside>
        <div className="profile-info">
          <h1>
            Pet <span className="blue-span">Information</span>
          </h1>
          <div className="profile-cards-cont">
            {data.pets.map((pet) => (
              <div key={pet._id} className="profile-card">
                <img src={pet.image} alt="Pet Profile" />
                <h4>{pet.name}</h4>
                <div className="profile-card-info">
                  <p>{pet.species}</p>
                  <p>{pet.breed}</p>
                  <p>{pet.gender}</p>
                  <p>{pet.age} In Year(s)</p>
                </div>
                <div className="profile-card-extra-info">
                  <ul>
                    <li>Weight: {pet.weight} lbs</li>
                    <li>Allergies: {pet.allergies}</li>
                    <li>Medications: {pet.medications}</li>
                    <li>Feeding Schedule: {pet.feedingSchedule}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
