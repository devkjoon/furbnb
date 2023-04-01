import React, { useState } from 'react';

function BookingPage() {
  const [service, setService] = useState('grooming');
  const [dateTime, setDateTime] = useState('');

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // send the booking request to the server or API
    alert(`Booking request submitted for ${service} on ${dateTime}`);
  };

  return (
    <div>
      <h1>Book a Service</h1>
      <form onSubmit={handleSubmit}>
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
          Choose a Date and Time:
          <input type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingPage;
