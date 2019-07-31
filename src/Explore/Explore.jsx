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
  constructor(props) {
    super(props);
    this.state = {

    };
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
        beds={item.beds}
        bathrooms={item.bathrooms}
        onClick={this.handleAccommodationListingClicked}
      />
    ));
  }

  handleAccommodationListingClicked = (id) => {
    const { history, showAccommodationInfo } = this.props;

    showAccommodationInfo(id);
    history.push('accommodation-info');
  }

  handleSearch = (location, checkIn, guestNumber) => {
    const { getAccommodationListings } = this.props;
    console.log(checkIn, guestNumber);
    getAccommodationListings(location);
  }

  displayFilterSection = () => {
    return (
      <div className="Explore__Filter">
        <p className="Explore__Filter__Item1">Refine search: </p>
        <Input size="large" id="min-price-input" placeholder="Min price" />
        <Input size="large" id="min-price-input" placeholder="Max price" />
        <Select defaultValue="Bathrooms" size="large">
          <Option value="Bathrooms" disabled>Bathrooms</Option>
          {[...Array(7).keys()].map(item => <Option value={item + 1}>{item + 1}</Option>)}
        </Select>
        <Select defaultValue="Property type" size="large">
          <Option value="Property type" disabled>Property type</Option>
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
    );
  }

  getNumberOfResults = () => {
    const { accommodations } = this.props;
    return `Showing 1-20 of ${accommodations.length} total results`;
  }

  render() {
    const { SearchCMS, searchLocation } = this.props;

    return (
      <div className="Explore">
        <Navbar className="Navbar" />
        <div className="Explore__Search">
          <Search searchFunc={this.handleSearch} CMS={SearchCMS} location={searchLocation} />
        </div>
        {this.displayFilterSection()}
        <div className="Explore__Results">
          <p>{this.getNumberOfResults()}</p>
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
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccommodationListings: Actions.getAccommodationListings,
  showAccommodationInfo: Actions.showAccommodationInfo,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
