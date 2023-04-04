import React from "react";
import { useQuery, gql } from "@apollo/client";
import PHUserImage from "../assets/images/Alexandria-pfp.PNG";
import "../assets/css/index.css";
import Auth from "../utils/auth";

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
  const { loading, error, data } = useQuery(GET_PETS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(Auth.getProfile().data)

  return (
    <div className="profile-cont">
      <div className="profile-div">
        <aside>
          <img src={PHUserImage} alt="User Profile" />
          <div className="user-info">
            <h5>
            {Auth.getProfile().data.firstName}{Auth.getProfile().data.lastName}
            </h5>
            
            <p>{Auth.getProfile().data.email}</p>
          </div>
          <p>1234 Furbnb Rd</p>
          <p>Nashville, TN 37205</p>
          <p>615-123-4567</p>
          <h6>Emergency Contact</h6>
          <ul>
            <li>Nashville Veterinary Specialists + Animal Emergency</li>
            <li>2971 Sidco Dr, Nashville, TN 37204</li>
            <li>Hours: Open 24 hours</li>
            <li>(615) 386-0107</li>
          </ul>
          <a href="/petlist">
            Add <span className="blue-span">Pet</span>
          </a>
          <a href="/schedule">
            Check <span className="blue-span">Schedule</span>
          </a>
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
                  <p>{pet.age} Year(s)</p>
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
