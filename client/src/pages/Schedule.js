import { gql, useQuery } from '@apollo/client';

const GET_BOOKINGS = gql`
  query GetBookings {
    bookings {
      _id
      pet
      serviceType
      date
      startTime
      endTime
      notes
    }
  }
`;

function Schedule() {
  const { loading, error, data } = useQuery(GET_BOOKINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.bookings.map((booking) => (
        <div key={booking._id}>
          <h3>{booking.pet}</h3>
          <p>Service Type: {booking.serviceType}</p>
          <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
          <p>Start Time: {booking.startTime}</p>
          <p>End Time: {booking.endTime}</p>
          {booking.notes && <p>Notes: {booking.notes}</p>}
        </div>
      ))}
    </div>
  );
}

export default Schedule;
