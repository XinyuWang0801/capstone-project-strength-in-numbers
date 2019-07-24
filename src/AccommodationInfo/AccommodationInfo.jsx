import React from 'react';
import { Bed02, Toilet } from '../icons';
import { BookingCard, Navbar } from '../@components';
import { Icon } from 'antd';
import { connect } from 'react-redux';
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

  render() {
    const {
      accommodationInfo: {
        beds, bathrooms, name, price,
      },
    } = this.props;

    return (
      <div className="AccommodationInfo">
        <div className="Explore__Nav"><Navbar /></div>
        <div className="AccommodationInfo__Images">
          <div className="AccommodationInfo__ImageWrapper">
            <img src="https://rimh2.domainstatic.com.au/3V0S73D5OjMzAZ4x9Fd9akRyMcw=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2015446486_2_1_190715_050200-w4600-h3067" alt="Accommodation" />
          </div>
          <div className="AccommodationInfo__ImageWrapper">
            <img src="https://rimh2.domainstatic.com.au/TCn1k_i9G3TyC2i2K9wf7xGNXAs=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2015446486_7_1_190715_050200-w4600-h3067" alt="Living room" />
          </div>
          <div className="AccommodationInfo__ImageWrapper">
            <img src="https://rimh2.domainstatic.com.au/eLvIhr_TTkA0C7sdwDhR1ttHyf4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/http://b.domainstatic.com.au.s3-website-ap-southeast-2.amazonaws.com/2015446486_1_1_190715_050200-w4600-h3067" alt="Bedroom" />
          </div>
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
              <span className="AccommodationInfo__Features"><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{beds} beds</span>
              <span className="AccommodationInfo__Features"><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
            </div>
            <p>Boasting a Golden Triangle address, an elegant makeover blends contemporary style and Victorian charm over three spacious levels. Behind the classic terrace facade, high ceilings and hardwood floors unravel into the quintessential in/outdoor design. The Caesarstone kitchen is equipped for the gourmet host with Miele induction and connects to open-plan interiors via striking Concertina bifold doors. Escape the vibrancy just footsteps away in the privacy of your very own urban oasis with a timber entertainer's deck and built-benches set against a landscaped backdrop and neighbouring trees. Nestled in one of Alexandria's most distinguished streetscapes, explore a lifestyle of rich diversity on your doorstep. Enjoy just footsteps to Erskineville village and Alexandria's dining precinct, and stroll to Newtown, Enmore, dog-friendly parks, esteemed schools, and superior transport.</p>
          </div>
          <div className="AccommodationInfo__BookingContainer">
            <BookingCard price={price} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.Explore,
    accommodationInfo: state.exploreState.accommodationInfo,
  };
};

export default connect(mapStateToProps)(AccommodationInfo);
