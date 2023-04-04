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

const options = { dateStyle: 'short', timeStyle: 'short' };
function Schedule() {
    const { loading, error, data } = useQuery(GET_BOOKINGS);
    const bookings = data?.bookings || {};
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <div className="schedule-container">
        {data.bookings.map((booking) => (
          <div key={booking._id}>
            <h2 className='sched-h2'>Your Pets Schedule</h2>
            <h3 className='sched-h3'>{booking.pet}</h3>
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





