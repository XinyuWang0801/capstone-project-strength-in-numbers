import PropTypes from 'prop-types';
import React from 'react';
import { Button, DatePicker, Select } from 'antd';
import { ErrorMessage, StarRating } from '..';
import * as Services from '../../store/services';

import './BookingCard.scss';

const { RangePicker } = DatePicker;
const { Option } = Select;

export class BookingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      guests: null,
      emptyGuestNumberError: false,
      bookingDateError: false,
      guestCapacityError: false,
    };
  }

  updateDates = (e) => {
    this.setState({
      // eslint-disable-next-line no-underscore-dangle
      startDate: e[0] ? e[0]._d.toLocaleDateString() : null,
      // eslint-disable-next-line no-underscore-dangle
      endDate: e[1] ? e[1]._d.toLocaleDateString() : null,
    });
  };

  updateGuestNumber = (value) => {
    this.setState({ guests: value });
  };

  handleBookClicked = () => {
    const { startDate, endDate, guests } = this.state;
    const { bookingFunc, maximumGuests } = this.props;

    const days = Services.getDatesBetweenTwoDates(startDate, endDate);
    const hasBookingDateError = days.length === 1;
    this.setState({ bookingDateError: hasBookingDateError });

    const hasEmptyGuestNumberError = !guests;
    this.setState({ emptyGuestNumberError: hasEmptyGuestNumberError });

    // Check that the requested number of guests is not greater than
    // the capacity of the accommodation
    const hasGuestCapacityError = guests > maximumGuests;
    this.setState({ guestCapacityError: hasGuestCapacityError });
    if (hasGuestCapacityError || hasBookingDateError || hasEmptyGuestNumberError) { return; }

    bookingFunc(days, guests);
  };

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  getBookedDates = (current) => {
    if (!current) { return false; }
    const { bookedDates } = this.props;

    // eslint-disable-next-line no-underscore-dangle
    const currentAsLocaleDateString = current._d.toLocaleDateString();
    return current && Object.values(bookedDates).includes(currentAsLocaleDateString);
  }

  render() {
    const { bookingDateError, guestCapacityError, emptyGuestNumberError } = this.state;
    const { CMS, price } = this.props;

    return (
      <div className="BookingCard">
        <div className="BookingCard__PriceAndRating">
          <span><span className="BookingCard--bold BookingCard--large">${price}</span> per night</span>
          <StarRating ratingNum={3} />
          <hr className="BookingCard__Separator" />
          <RangePicker
            size="large"
            onCalendarChange={this.updateDates}
            format="DD-MM-YYYY"
            disabledDate={this.getBookedDates}
            disabledTime={Services.getDisabledDateTime}
            placeholder={['Check in', 'Check out']}
            showTime={{
              hideDisabledOptions: true,
            }}
          />
          {bookingDateError && <ErrorMessage>{CMS.bookingDateError}</ErrorMessage>}
          <Select defaultValue="Guests" onSelect={this.updateGuestNumber} size="large" className="BookingCard__Dropdown">
            <Option value="Guests" disabled>Guests</Option>
            {[...Array(7).keys()].map(item => <Option value={item + 1}>{item + 1}</Option>)}
          </Select>
          {guestCapacityError && <ErrorMessage>{CMS.guestCapacityError}</ErrorMessage>}
          {emptyGuestNumberError && <ErrorMessage>{CMS.emptyGuestNumberError}</ErrorMessage>}
          <br />
          <Button
            type="primary"
            icon="search"
            size="large"
            className="BookingCard__Button"
            onClick={this.handleBookClicked}
          >
            Request to book
          </Button>
        </div>
      </div>
    );
  }
}

BookingCard.defaultProps = {
  bookedDates: [],
  maximumGuests: 0,
  CMS: {},
};

BookingCard.propTypes = {
  bookingFunc: PropTypes.func.isRequired,
  bookedDates: PropTypes.object,
  maximumGuests: PropTypes.number,
  CMS: PropTypes.object,
};
