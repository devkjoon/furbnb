import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

const CREATE_BOOKING = gql`
  mutation CreateBooking($input: BookingInput!) {
    createBooking(input: $input) {
      _id
      pet {
        _id
        name
      }
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
    setPet(event.target.value);
  };

  const { loading, error, data } = useQuery(GET_PETS);

  const [createBooking] = useMutation(CREATE_BOOKING);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createBooking({
        variables: {
          input: {
            pet,
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
  if (error) return <p>Error :(</p>;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

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
          <select value={pet} onChange={handlePetChange}>
            <option value=''>-- Select a Pet --</option>
            {data.pets.map(({ _id, name }) => (
              <option key={_id} value={_id}>{name}</option>
              ))}
              </select>
            </label>
            <br />
            <button type="submit">Submit</button>
            </form>
            </div>
            );
            }
            
            export default BookingPage;