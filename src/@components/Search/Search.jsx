import PropTypes from 'prop-types';
import React from 'react';
import { Button, DatePicker, Input, Select } from 'antd';
import { ErrorMessage } from '../ErrorMessage';
import * as algoliaPlaces from 'places.js';
import './Search.scss';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      administrativeRegion: null,
      city: null,
      country: null,
      guestNumber: null,
      checkInDate: null,
      checkOutDate: null,
      location: '',
    };
  }

  componentDidMount() {
    const placesAutocomplete = algoliaPlaces({
      appId: 'pl5GIZH93TG1',
      apiKey: 'ddba8174f4fa9530ebcd22bef118dba5',
      container: document.getElementById('location-input'),
      type: 'address',
      aroundLatLngViaIP: false,
    });

    placesAutocomplete.on('change', (e) => {
      this.handleSearchSuggestionCompleted(e);
      this.setState({
        location: e.suggestion.value,
      });
    });
  }

  static getDerivedStateFromProps(props, state) {
    if (state.location === '' && props.location !== '') {
      return {
        location: props.location,
      };
    }
    return null;
  }

  handleSearchClicked = () => {
    const { CMS: { validation: { locationRequired, daysRequired, guestNumberRequired } }, searchFunc } = this.props;
    const { administrativeRegion, city, country, checkInDate, checkOutDate, guestNumber, location } = this.state;

    if (!city) {
      this.setState({ errorMessage: locationRequired });
      return;
    }

    if (!checkInDate || !checkOutDate) {
      this.setState({ errorMessage: daysRequired });
      return;
    }

    if (!guestNumber) {
      this.setState({ errorMessage: guestNumberRequired });
      return;
    }

    this.setState({ errorMessage: null });

    const locationDetails = {
      administrativeRegion,
      city,
      country,
    };
    const fullLocation = location;
    searchFunc(locationDetails, checkInDate, guestNumber, fullLocation);
  }

  handleSearchSuggestionCompleted = (e) => {
    this.setState({
      administrativeRegion: e.suggestion.administrative,
      city: e.suggestion.city,
      country: e.suggestion.country,
    });
  }

  updateGuestNumber = (value) => {
    this.setState({
      guestNumber: value,
    });
  }

  updateDates = (dates) => {
    // eslint-disable-next-line no-underscore-dangle
    const checkInDate = dates[0] ? dates[0]._d.toLocaleDateString() : null;
    // eslint-disable-next-line no-underscore-dangle
    const checkOutDate = dates[1] ? dates[1]._d.toLocaleDateString() : null;

    this.setState({
      checkInDate,
      checkOutDate,
    });
  }

  handleLocationInputChange = (e) => {
    this.setState({ location: e.target.value });
  }

  render() {
    const { CMS: { searchPlaceholder } } = this.props;
    const { errorMessage, location } = this.state;

    return (
      <div className="Search">
        <div className="Search__Input">
          <Input size="large" id="location-input" placeholder={searchPlaceholder} onChange={this.handleLocationInputChange} value={location} />
          <RangePicker size="large" onCalendarChange={this.updateDates} format="DD-MM-YYYY" placeholder={['Check in', 'Check out']} style={{ width: '250px' }} />
          <Select defaultValue="Guests" onSelect={this.updateGuestNumber} size="large" className="Search__Dropdown">
            <Option value="Guests" disabled>Guests</Option>
            {[...Array(7).keys()].map(item => <Option value={item + 1}>{item + 1}</Option>)}
          </Select>
          <Button
            type="primary"
            icon="search"
            size="large"
            className="Search__Button"
            onClick={this.handleSearchClicked}
          >
            Search
          </Button>
        </div>
        <div className="Search_Error">
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </div>
      </div>
    );
  }
}

Search.defaultProps = {
  CMS: { },
};

Search.propTypes = {
  CMS: PropTypes.any,
  searchFunc: PropTypes.func.isRequired,
};
