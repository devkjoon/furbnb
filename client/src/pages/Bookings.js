import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
const CREATE_BOOKING = gql`
  mutation CreateBooking($input: BookingInput!) {
    createBooking(input: $input) {
      _id
      serviceType
      date
      startTime
      endTime
    }
  }
`;
const GET_PETS = gql`
  query GetPets {
    pets {
      _id
      name
    }
  }
`;


const GET_BOOKINGS = gql`
query GetBookings {
  bookings {
    _id
    pet {
      _id
      name
    }
    serviceType
    date
    startTime
    endTime
    notes
  }
}
`;

function BookingPage() {
  const navigate = useNavigate();
  const [service, setService] = useState('grooming');
  const [dateTime, setDateTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pet, setPet] = useState('');
  const handleServiceChange = (event) => {
    setService(event.target.value);
  };
  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handlePetChange = (event) => {
    const selectedPetId = event.target.value;
    const selectedPet = data.pets.find(pet => pet._id === selectedPetId);
    setPet(selectedPet);
  };
  
 

  const { loading, error, data } = useQuery(GET_PETS);

  const [createBooking] = useMutation(CREATE_BOOKING);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createBooking({
        variables: {
          input: {
            pet: {_id:pet._id, name:pet.name},
            serviceType: service,
            date: dateTime,
            startTime: dateTime,
            endTime: endDate
          },
        },
      });      
      console.log(result);
      alert(`Booking request submitted for ${service} from ${dateTime} to ${endDate}`);
      navigate('/schedule');
    } catch (error) {
      console.error(error);
      alert('Failed to create booking');
    }
    navigate('/schedule');
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

  return (
    <div className="booking-cont">
      <h1>Book<span className="black-span">a</span><span className="blue-span">Service</span></h1>
      <form className='booking-div' onSubmit={handleSubmit}>
        <label>
          Select a Service:
          <select value={service} onChange={handleServiceChange}>
            <option value="grooming">Grooming</option>
            <option value="boarding">Boarding</option>
            <option value="training">Training</option>
            <option value="veterinary">Veterinary Services</option>
          </select>
        </label>
        <br />
        <label>
          Choose a Start Date and Time:
          <input type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
        </label>
        <br />
        <label>
          Choose an End Date and Time:
          <input type="datetime-local" value={endDate} onChange={handleEndDateChange} />
        </label>
        <br />
        <label>
          Choose a Pet:
          <select value={pet._id} onChange={handlePetChange}>
            <option value=''>-- Select a Pet --</option>
            {data && data.pets.map(pet => (
              <option key={pet._id} value={pet._id}>{pet.name}</option>
            ))}
          </select>
        </label>
        <br />
        <button type='submit'>Book Service</button>
      </form>
    </div>
  );
}
export default BookingPage;