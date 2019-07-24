/* eslint-disable object-curly-newline */
import React from 'react';
import { CurvedImage, LandingPageVector } from '../icons';
import { Navbar, Search } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';
import './LandingPage.scss';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.locationInputRef = React.createRef();
    this.checkInInputRef = React.createRef();
    this.checkOutInputRef = React.createRef();
    this.guestNumberRef = React.createRef();
  }

  handleSearch = (location, checkIn, guestNumber) => {
    const { getAccommodationListings, history } = this.props;
    console.log(location, checkIn, guestNumber);

    getAccommodationListings(location);
    history.push('explore');
  }

  render() {
    const { CMS: { welcomeTitle, welcomeIntroduction }, SearchCMS } = this.props;

    return (
      <div className="LandingPage">
        <Navbar />
        <div className="LandingPage__Heading">
          <h1>{welcomeTitle}</h1>
          <p>{welcomeIntroduction}</p>
        </div>
        <div className="LandingPage__Form">
          <Search CMS={SearchCMS} searchFunc={this.handleSearch} />
        </div>
        <LandingPageVector width="25%" className="LandingPage__Vector" />
        <CurvedImage className="LandingPage__CurvedBG" width="30%" />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.LandingPage,
    SearchCMS: state.CMS.MainSearch,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  getAccommodationListings: Actions.getAccommodationListings,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
