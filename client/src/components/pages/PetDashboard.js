// import React from 'react';
// import { useQuery, gql } from '@apollo/client';

// const GET_PETS = gql`
//   query GetPets {
//     pets {
//       _id
//       name
//       species
//       breed
//       gender
//       age
//       weight
//       allergies
//       medications
//       feedingSchedule
//       image
//     }
//   }
// `;

// const PetDashboard = () => {
//   const { loading, error, data } = useQuery(GET_PETS);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//       {data && (
//         <div className="pets-grid">
//           {data.pets.map((pet) => (
//             <div key={pet._id} className="pet-card">
//               <img src={pet.image} alt={pet.name} />
//               <h3>{pet.name}</h3>
//               <p>{pet.species}</p>
//               <p>{pet.breed}</p>
//               {/* Display other pet information as needed */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default PetDashboard;
