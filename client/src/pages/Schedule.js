import { gql, useQuery } from '@apollo/client';

const GET_BOOKINGS = gql`
  query {
    bookings {
      _id
      serviceType
      date
      startTime
      endTime
      notes
      petInfo {
        name
        age
        breed
      }
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

const options = { dateStyle: 'short', timeStyle: 'short' };

function Schedule() {
  const { loading: loadingBookings, error: errorBookings, data: dataBookings } = useQuery(GET_BOOKINGS);
  const { loading: loadingPets, error: errorPets, data: dataPets } = useQuery(GET_PETS);

  if (loadingBookings || loadingPets) return <p>Loading...</p>;
  if (errorBookings || errorPets) return <p>Error :(</p>;

  // Create a pets object with pet name as key and ID as value
  const pets = {};
  dataPets.pets.forEach((pet) => {
    pets[pet.name] = pet._id;
  });

  return (
    <div className="schedule-container">
      <h2 className='sched-h2'>Your Pets Schedule</h2>
      {dataBookings.bookings.map((booking) => (
        <div key={booking._id}>
          <h3 className='sched-h3'>{booking.pet.name}</h3>
          <p className="sched-p">Service Type: {booking.serviceType}</p>
          <p className="sched-p">Start Time: {new Date(booking.startTime).toLocaleString('en-US', options)}</p>
          <p className="sched-p">End Time: {new Date(booking.endTime).toLocaleString('en-US', options)}</p>
          {booking.notes && <p className="text notes">Notes: {booking.notes}</p>}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
