import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { StarRating } from '../../@components';

import './BookingCard.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;

export const BookingCard = (props) => {
  const { price } = props;

  const updateDates = () => {

  };

  const handleBookClicked = () => {

  };

  const updateGuestNumber = () => {

  };

  return (
    <div className="BookingCard">
      <div className="BookingCard__PriceAndRating">
        <span><span className="BookingCard--bold BookingCard--large">${price}</span> per night</span>
        <StarRating ratingNum={3} />
        <hr className="BookingCard__Separator" />
        <RangePicker size="large" onCalendarChange={updateDates} format="DD-MM-YYYY" placeholder={['Check in', 'Check out']} />
        <Select defaultValue="Guests" onSelect={updateGuestNumber} size="large" className="BookingCard__Dropdown">
          <Option value="Guests" disabled>Guests</Option>
          {[...Array(7).keys()].map(item => <Option value={item + 1}>{item + 1}</Option>)}
        </Select>
        <br />
        <Button
          type="primary"
          icon="search"
          size="large"
          className="BookingCard__Button"
          onClick={handleBookClicked}
        >
          Request to book
        </Button>
      </div>
    </div>
  );
};
