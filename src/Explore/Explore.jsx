import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import React from 'react';
import Select from '@material-ui/core/Select';
import {
  Button, Dropdown, Navbar, PropertyCard, Search, Textbox,
} from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './Explore.scss';

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
        name={item.name}
        price={item.price}
        address={`${item.location.street}, ${item.location.city}, ${item.location.state}`}
        beds={item.beds}
        bathrooms={item.bathrooms}
        onClick={this.handleAccommodationListingClicked}
      />
    ));
  }

  handleAccommodationListingClicked = () => {
    const { history } = this.props;

    history.push('accommodation-info');
  }

  handleSearch = (location, checkIn, guestNumber) => {
    const { getAccommodationListings } = this.props;

    getAccommodationListings(location);
  }

  displayFilterSection = () => {
    return (
      <div className="Explore__Filter">
        <p className="Explore__Filter__Item1">Refine search: </p>
        <Textbox label="Min price" />
        <Textbox label="Max price" />
        <div className="Explore__Filter__Select">
          <Dropdown>
            <option value="" disabled>Bathrooms</option>
            {[...Array(7).keys()].map(item => <option value={item + 1}>{item + 1}</option>)}
          </Dropdown>
        </div>
        <div className="Explore__Filter__Select">
          <Dropdown>
            <option value="" disabled>Property type</option>
            {[...Array(7).keys()].map(item => <option value={item + 1}>{item + 1}</option>)}
          </Dropdown>
        </div>
        <Button className="Explore__Filter__Item1">Search</Button>
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
        <div className="Explore__Nav"><Navbar /></div>
        <div className="Explore__Search">
          <Search searchFunc={this.handleSearch} />
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
    accommodations: state.exploreState.accommodations,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccommodationListings: Actions.getAccommodationListings,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
