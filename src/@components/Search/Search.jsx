import React from 'react';
import { Button, DatePicker, Input, Select } from 'antd';
import { ErrorMessage } from '../ErrorMessage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import * as algoliaPlaces from 'places.js';
import './Search.scss';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
  }

  componentDidMount() {
    const { updateSearchLocation } = this.props;

    const placesAutocomplete = algoliaPlaces({
      appId: 'pl5GIZH93TG1',
      apiKey: 'ddba8174f4fa9530ebcd22bef118dba5',
      container: document.getElementById('location-input'),
      type: 'address',
      aroundLatLngViaIP: false,
    });

    placesAutocomplete.on('change', (e) => {
      updateSearchLocation({
        administrativeRegion: e.suggestion.administrative,
        city: e.suggestion.city ? e.suggestion.city : e.suggestion.name,
        country: e.suggestion.country,
        fullLocation: e.suggestion.value,
      });
    });
  }

  handleSearchClicked = () => {
    const { CMS: { validation: { locationRequired, daysRequired, guestNumberRequired } } } = this.props;
    const { searchLocation: { city }, dates, guestNumber, getAccommodationListings, navigateTo } = this.props;

    const hasLocationError = !city;
    const hasDatesError = !dates.checkInDate || !dates.checkOutDate;
    const hasGuestNumberError = !guestNumber;

    this.setState({
      errorMessage: hasLocationError ? locationRequired : hasDatesError ? daysRequired : hasGuestNumberError ? guestNumberRequired : null,
    });

    if (hasLocationError || hasDatesError || hasGuestNumberError) {
      return;
    }
    getAccommodationListings();

    if (navigateTo) {
      navigateTo();
    }
  }

  updateGuestNumber = (value) => {
    const { updateGuestNumber } = this.props;
    updateGuestNumber(value);
  }

  updateDates = (dates) => {
    const { updateSearchDates } = this.props;
    // eslint-disable-next-line no-underscore-dangle
    const checkInDate = dates[0] ? dates[0]._d.toLocaleDateString() : null;
    // eslint-disable-next-line no-underscore-dangle
    const checkOutDate = dates[1] ? dates[1]._d.toLocaleDateString() : null;

    updateSearchDates({
      checkInDate,
      checkOutDate,
      iCheckInDate: dates[0],
      iCheckOutDate: dates[1] || null,
    });
  }

  render() {
    const { CMS: { searchPlaceholder }, searchLocation: { fullLocation }, dates: { iCheckInDate, iCheckOutDate }, guestNumber } = this.props;
    const { errorMessage } = this.state;

    return (
      <div className="Search">
        <div className="Search__Input">
          <Input size="large" id="location-input" placeholder={searchPlaceholder} onChange={this.handleLocationInputChange} defaultValue={fullLocation} />
          <RangePicker
            size="large"
            onCalendarChange={this.updateDates}
            format="DD-MM-YYYY"
            placeholder={['Check in', 'Check out']}
            style={{ width: '250px' }}
            defaultValue={[iCheckInDate, iCheckOutDate]}
          />
          <Select defaultValue={guestNumber || 'Guests'} onSelect={this.updateGuestNumber} size="large" className="Search__Dropdown" placeholder="Guests">
            <Option value="Guests" disabled>Guests</Option>
            {[...Array(7).keys()].map(item => <Option key={item + 1} value={item + 1}>{item + 1}</Option>)}
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

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.MainSearch,
    searchLocation: state.exploreState.searchLocation,
    dates: state.exploreState.dates,
    guestNumber: state.exploreState.guestNumber,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  updateSearchLocation: Actions.updateSearchLocation,
  updateSearchDates: Actions.updateSearchDates,
  updateGuestNumber: Actions.updateGuestNumber,
  getAccommodationListings: Actions.getAccommodationListings,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
