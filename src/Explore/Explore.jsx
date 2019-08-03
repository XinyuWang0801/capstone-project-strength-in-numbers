import React from 'react';
import { Button, Input, Select } from 'antd';
import { Navbar, PropertyCard, Search } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './Explore.scss';
import 'antd/dist/antd.css';

const { Option } = Select;

class Explore extends React.Component {
  getNumberOfBeds = (roomArrangement) => {
    return roomArrangement ? roomArrangement.reduce((acc, room) => acc + room.reduce((_acc, bed) => _acc + bed.numberOfBeds, 0), 0) : '';
  }

  displayAccommodationListings = () => {
    const { accommodations } = this.props;

    return accommodations.map(item => (
      <PropertyCard
        className="Explore__Results__Properties__Item"
        id={item.id}
        name={item.name}
        price={item.price}
        address={`${item.location.street}, ${item.location.city}, ${item.location.state}`}
        beds={this.getNumberOfBeds(item.roomArrangement)}
        bathrooms={item.bathrooms}
        onClick={this.handleAccommodationListingClicked}
        photo={item.photos && item.photos.length > 0 ? item.photos[0] : null}
      />
    ));
  }

  handleAccommodationListingClicked = (id) => {
    const { history, showAccommodationInfo } = this.props;

    showAccommodationInfo(id);
    history.push('accommodation-info');
  }

  onMaxPriceEntered = (e) => {
    if (e.target.value === '') { return; }
    const { filterAccommodationsByMaxPrice } = this.props;

    filterAccommodationsByMaxPrice(e.target.value);
  }

  onMinPriceEntered = (e) => {
    if (e.target.value === '') { return; }
    const { filterAccommodationsByMinPrice } = this.props;

    filterAccommodationsByMinPrice(e.target.value);
  }

  onBathroomNumberSelected = (value) => {
    const { filterAccommodationsByBathroomNum } = this.props;

    filterAccommodationsByBathroomNum(value);
  }

  onAccommodationTypeSelected = (value) => {
    const { filterAccommodationsByType } = this.props;

    filterAccommodationsByType(value);
  }

  displayFilterSection = () => {
    const { refData: { propertyTypes } } = this.props;

    return (
      <div className="Explore__Filter">
        <p className="Explore__Filter__Header">Refine search: </p>
        <Input className="Explore__Filter__Item" size="large" id="min-price-input" placeholder="Min price" onBlur={this.onMinPriceEntered} />
        <Input className="Explore__Filter__Item" size="large" id="max-price-input" placeholder="Max price" onBlur={this.onMaxPriceEntered} />
        <Select className="Explore__Filter__Item" defaultValue="Bathrooms" size="large" onChange={this.onBathroomNumberSelected}>
          <Option value="Bathrooms" disabled>Bathrooms</Option>
          {[...Array(7).keys()].map(item => <Option value={item + 1} key={`bathroom_${item}`}>{item + 1}</Option>)}
        </Select>
        <Select className="Explore__Filter__Item" defaultValue="Property type" size="large" onChange={this.onAccommodationTypeSelected}>
          <Option value="Property type" disabled>Property type</Option>
          {propertyTypes.map(item => <Option value={item} key={item}>{item}</Option>)}
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
    );
  }

  getNumberOfResults = () => {
    const { accommodations } = this.props;
    return `Showing 1-20 of ${accommodations.length} total results`;
  }

  render() {
    return (
      <div className="Explore">
        <Navbar className="Navbar" />
        <div className="Explore__Search">
          <Search />
        </div>
        {this.displayFilterSection()}
        <div className="Explore__Results">
          <p style={{ marginBottom: '0' }}>{this.getNumberOfResults()}</p>
          <div className="Explore__Results__Properties">
            {this.displayAccommodationListings()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.Explore,
    SearchCMS: state.CMS.MainSearch,
    accommodations: state.exploreState.accommodations,
    searchLocation: state.exploreState.searchLocation,
    guestNumber: state.exploreState.guestNumber,
    refData: state.refData,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccommodationListings: Actions.getAccommodationListings,
  showAccommodationInfo: Actions.showAccommodationInfo,
  filterAccommodationsByMaxPrice: Actions.filterAccommodationsByMaxPrice,
  filterAccommodationsByMinPrice: Actions.filterAccommodationsByMinPrice,
  filterAccommodationsByBathroomNum: Actions.filterAccommodationsByBathroomNum,
  filterAccommodationsByType: Actions.filterAccommodationsByType,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
