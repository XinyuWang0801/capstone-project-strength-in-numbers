import React from 'react';
import { Bed02, Toilet } from '../icons';
import { BookingCard, Navbar } from '../@components';
import { Icon } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './AccommodationInfo.scss';

const BedIcon = props => <Icon component={Bed02} {...props} />;
const ToiletIcon = props => <Icon component={Toilet} {...props} />;

class AccommodationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  formatLocation = () => {
    const { location } = this.props;
    if (!location.street) return '';

    return `${location.street}, ${location.city} ${location.state} ${location.zipCode}`;
  };

  handleRequestToBook = (dates, guests) => {
    const { bookAccommodation } = this.props;
    bookAccommodation(dates, guests);
  }

  getNumberOfBeds = () => {
    const { accommodationInfo: { roomArrangement } } = this.props;
    return roomArrangement ? roomArrangement.reduce((acc, room) => acc + room.reduce((_acc, bed) => _acc + bed.numberOfBeds, 0), 0) : '';
  }

  getPhotos = () => {
    const { accommodationInfo: { photos } } = this.props;

    if (!photos) { return ''; }

    return photos.map((photo) => {
      return (
        <div className="AccommodationInfo__ImageWrapper">
          <img src={photo} alt="Accommodation" />
        </div>
      );
    });
  }

  render() {
    const { accommodationInfo: { bathrooms, description, name, price, bookedDates, guests } } = this.props;
    const { accommodationBooking } = this.props;

    return (
      <div className="AccommodationInfo">
        <div className="Explore__Nav"><Navbar /></div>
        <div className="AccommodationInfo__Images">
          {this.getPhotos()}
        </div>
        <div className="AccommodationInfo__Information">
          <div className="AccommodationInfo__InformationContainer">
            <div className="AccommodationInfo__InformationNav">
              <span className="AccommodationInfo__InformationNav--active">Overview</span>
              <span className="AccommodationInfo__InformationNav--inactive">Reviews</span>
              <span className="AccommodationInfo__InformationNav--inactive">Location</span>
            </div>
            <hr />
            <p className="AccommodationInfo__Property">{this.formatLocation}</p>
            <h3 className="AccommodationInfo__Name">{name}</h3>
            <div className="AccommodationInfo__FeaturesContainer">
              <span className="AccommodationInfo__Features"><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{this.getNumberOfBeds()} beds</span>
              <span className="AccommodationInfo__Features"><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
            </div>
            <p>{description || accommodationBooking.defaultDescription}</p>
          </div>
          <div className="AccommodationInfo__BookingContainer">
            <BookingCard
              price={price}
              bookingFunc={this.handleRequestToBook}
              bookedDates={bookedDates}
              maximumGuests={guests}
              CMS={accommodationBooking}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accommodationInfo: state.exploreState.accommodationInfo,
    accommodationBooking: state.CMS.accommodationBooking,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  bookAccommodation: Actions.bookAccommodation,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationInfo);
