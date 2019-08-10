import React from 'react';
import { Bed02, Toilet } from '../icons';
import { BookingCard, Navbar } from '../@components';
import { Icon, Input, Spin } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './AccommodationInfo.scss';

const BedIcon = props => <Icon component={Bed02} {...props} />;
const ToiletIcon = props => <Icon component={Toilet} {...props} />;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

const { TextArea } = Input;

class AccommodationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.reviewRef = React.createRef();
    this.state = {
      loading: false,
    };
  }

  getReview = () => {
    const { accommodationInfo: { reviews } } = this.props;
    if (!reviews) { return ''; }

    return reviews.map((review) => {
      return (
        <div className="AccommodationInfo__Information">
          <p>review should appear here</p>
          <p>{review.name} {review.content}</p>
        </div>
      );
    });
  }

  formatLocation = () => {
    const { location } = this.props;
    if (!location.street) return '';

    return `${location.street}, ${location.city} ${location.state} ${location.zipCode}`;
  };

  handleRequestToBook = async (dates, guests) => {
    const { bookAccommodation, history, navigateToAccountInfo } = this.props;
    this.setState({ loading: true });

    await bookAccommodation(dates, guests);

    navigateToAccountInfo(history);
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

  // handleReview = () => {
  //   const { addReview } = this.props;
  //   const review = this.descriptionRef.current.textAreaRef.value;

  //   addReview(review);
  // }

  render() {
    const { accommodationInfo: { bathrooms, description, name, price, bookedDates, guests, review }, accommodationBooking } = this.props;
    const { loading } = this.state;

    return (
      <div className="AccommodationInfo">
        {loading && <Spin indicator={antIcon} style={{ zIndex: 3, display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} />}
        {loading && <div className="SignUpPage__Loading" />}
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
ç            <p className="AccommodationInfo__Property">{this.formatLocation}</p>
            <h3 className="AccommodationInfo__Name">{name}</h3>
            <div className="AccommodationInfo__FeaturesContainer">
              <span className="AccommodationInfo__Features"><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{this.getNumberOfBeds()} beds</span>
              <span className="AccommodationInfo__Features"><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
            </div>
            <p>{description || accommodationBooking.defaultDescription}</p>
            <hr />
            <div className="AccommodationInfo__ReviewSection">
              {this.getReview()}
              <TextArea
                autosize={{ minRows: 6, maxRows: 6 }}
                placeholder="Add some review here"
                size="large"
                className="DescriptionSection__TextArea"
                ref={this.reviewRef}
              />
            </div>
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
  navigateToAccountInfo: Actions.navigateToAccountInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AccommodationInfo);
