// import React from 'react';

// function ThankYou({ message }) {
//     return (
//         <div className="thank-you-message">
//             <h2>Reservation Confirmed!</h2>
//             <p>{message}</p>
//         </div>
//     );
// }

// export default ThankYou;

import React from "react";
import "./ThankYou.css";

const ThankYou = ({ message }) => {
  return (
    <div className="ticket">
      <div className="ticket-left">
        <h1>HOTEL</h1>
        <h2>Reservation</h2>
        <h3>
          at <b>{message.selectedHotel}</b>
        </h3>
        <div className="details">
          <p>
            <strong>TO:</strong> {message.guestName}
          </p>
          <p>
            <strong>FROM:</strong> OnBoard
          </p>
          <p>
            <strong>DURATION:</strong> {message.numberOfNights} DAYS{" "}
            {message.numberOfNights - 1} NIGHTS
          </p>
          <p>
            <strong>DATE:</strong> {message.checkInDate}
          </p>
          <p>
            <strong>MESSAGE:</strong> Thank you, {message.guestName}. Your
            reservation at "{message.selectedHotel}" has been confirmed.
          </p>
        </div>
      </div>
      <div className="ticket-right">
        <div className="ticket-info">
          <h4>DINING AND</h4>
          <h4>ACCOMODATION</h4>
          <div className="barcode"></div>
          <p>ENJOY YOUR STAY</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
