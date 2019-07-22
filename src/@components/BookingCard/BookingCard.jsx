import React from 'react';
import { Button, Datepicker, StarRating } from '../../@components';
import './BookingCard.scss';

export const BookingCard = (props) => {
  return (
    <div className="BookingCard">
      <div className="BookingCard__PriceAndRating">
        <span><span className="BookingCard--bold">$150</span> per night</span>
        <StarRating ratingNum={3} />
        <hr className="BookingCard__Separator" />
        <div className="BookingCard__CheckInOut">
          <Datepicker label="Check in" />
          <Datepicker label="Check out" />
        </div>
        <br />
        <Datepicker label="Guests" />
        <br />
        <Button>Request to book</Button>
      </div>
    </div>
  );
};
