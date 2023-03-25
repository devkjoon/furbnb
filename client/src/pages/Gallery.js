import React from "react";
// import '../assets/css/index.css';

export default function PetGallery() {
  const pets = [
    {
      name: "Fluffy",
      image: "https://example.com/fluffy.jpg",
      age: 3,
      favoriteActivities: ["Chasing laser pointers", "Cuddling"],
    },
    {
      name: "Max",
      image: "https://example.com/max.jpg",
      age: 2,
      favoriteActivities: ["Playing fetch", "Going for walks"],
    },
    {
      name: "Bella",
      image: "https://example.com/bella.jpg",
      age: 4,
      favoriteActivities: ["Rolling in the grass", "Getting belly rubs"],
    },
  ];

  return (
    <div>
      <h1>Pet Gallery</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.name}>
            <h2>{pet.name}</h2>
            <img src={pet.image} alt={pet.name} />
            <p>Age: {pet.age}</p>
            <ul>
              {pet.favoriteActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
