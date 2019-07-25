import MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Input } from 'antd';
import { ErrorMessage, Heading } from '../../@components';
import { MapLocation } from '../../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import * as algoliaPlaces from 'places.js';

import './Location.scss';

const mapboxToken = 'pk.eyJ1Ijoic2NpZW50aXN0Y29jbyIsImEiOiJjanlpYnRyb2kwOHN6M2lxbHpjandsdnJwIn0.jPLI15Qhk8gOqpSwIxEpLQ';

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: {
        city: null,
        country: null,
        state: null,
        street: null,
        zipCode: null,
      },
      viewport: {
        latitude: 37.785164,
        longitude: -120,
        zoom: 15,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%',
      },
      addressError: null,
    };
  }

  componentDidMount() {
    const configs = {
      appId: 'pl5GIZH93TG1',
      apiKey: 'ddba8174f4fa9530ebcd22bef118dba5',
      aroundLatLngViaIP: false,
    };

    const addressAutocomplete = algoliaPlaces({
      ...configs,
      container: document.getElementById('address-input'),
      type: 'address',
    });

    addressAutocomplete.on('change', (e) => {
      this.handleSearchSuggestionCompleted(e);
    });
  }

  handleClick = () => {
    const { userAddress } = this.state;
    const { addAddress, getNextSection } = this.props;

    if (!userAddress.city) {
      this.setState({ addressError: true });
      return;
    }

    this.setState({ addressError: false });

    addAddress(userAddress);

    getNextSection('LOCATION');
  };

  handleSearchSuggestionCompleted = (e) => {
    const { viewport } = this.state;

    const nViewport = {
      ...viewport,
      latitude: e.suggestion.latlng.lat,
      longitude: e.suggestion.latlng.lng,
    };

    this.setState({
      viewport: nViewport,
      userAddress: {
        city: e.suggestion.city,
        country: e.suggestion.country,
        street: e.suggestion.name,
        state: e.suggestion.administrative,
        zipCode: e.suggestion.postcode,
      },
    });
  }

  render() {
    const { viewport, addressError } = this.state;
    const { CMS } = this.props;

    return (
      <div className="LocationSection">
        <Heading
          title={CMS.locationHeader}
          icon={<MapLocation />}
        />
        <Input id="address-input" />
        {addressError && <ErrorMessage>{CMS.addressError}</ErrorMessage>}
        <div className="LocationSection__Map">
          <MapGL
            {...viewport}
            mapboxApiAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker {...viewport}>
              <Icon type="environment" theme="twoTone" style={{ fontSize: '2em' }} />
            </Marker>
          </MapGL>
        </div>
        <Button onClick={this.handleClick} type="primary" className="antd__Button--centered" size="large">
          CONTINUE
          <Icon type="right" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.locationSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addAddress: Actions.addAddress,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Location);

Location.defaultProps = {
  getNextSection: null,
};

Location.propTypes = {
  getNextSection: PropTypes.func,
};
