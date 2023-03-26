import React from "react";
import Fluffy from "../assets/images/Fluffy.jpg"
import Max from "../assets/images/Max.jpg"
import Bella from "../assets/images/Bella.jpg"
import Chaos from "../assets/images/Chaos.jpg"
import Ruby from "../assets/images/Ruby.jpg"
import Lucky from "../assets/images/Lucky.jpg"
import '../assets/css/index.css';

export default function PetGallery() {
  const pets = [
    {
      name: "Fluffy",
      image: Fluffy,
      age: 3,
      favoriteActivities: ["Chasing laser pointers", "Cuddling"],
    },
    {
      name: "Max",
      image: Max,
      age: 6,
      favoriteActivities: ["Playing fetch", "Going for walks"],
    },
    {
      name: "Bella",
      image: Bella,
      age: 3,
      favoriteActivities: ["Rolling in the grass", "Getting belly rubs"],
    },
    {
      name: "Chaos",
      image: Chaos,
      age: 5,
      favoriteActivities: ["Playing tag", "Chasing birds"]
    },
    {
      name: "Ruby",
      image: Ruby,
      age: 1,
      favoriteActivities: ["Playing Hide & Seek", "Watching friends"]
    },
    {
      name: "Lucky",
      image: Lucky,
      age: 4,
      favoriteActivities: ["Going for hikes", "Riding in the car"]
    }
  ];

  return (
    <div className="gallery-cont">
      <h1>Pet <span className="blue-span">Gallery</span></h1>
      <h3>Meet some of our most photogenic friends!</h3>
      <div className="gallery">
        {pets.map((pet) => (
          <div className="gallery-card" key={pet.name}>
            <img src={pet.image} alt={pet.name} />
            <div className="gallery-card-info">
            <h2>{pet.name}</h2>
              <p>Age<span className="black-span">:</span> <span className="blue-span">{pet.age}</span></p>
            <h5>Favorite Activities</h5>
            <ul className="activities">
              {pet.favoriteActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
            </div>
          </div>
        ))}
      </div>
      <div class="gallery-submit-info">
        <h4>Your Pets</h4>
        <h3>Submit<span class="black-span">Your</span><span class="blue-span">Pet</span></h3>
        <p>Want to see your pet in our gallery?</p>
        <p>Submit your images by contacting us</p>
        <a href="contact"><p>Here</p></a>
      </div>
    </div>
  );
}
