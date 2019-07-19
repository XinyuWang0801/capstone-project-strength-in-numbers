import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField, Heading, ErrorMessage, Dropdown } from '../../@components';
import { MapLocation } from '../../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import './Location.scss';
import { throwError } from 'rxjs';

export class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAddress: {
        street: '',
        city: '',
        state: '',
        postcode: '',
      },
      streetFillError: false,
      cityFillError: false,
      stateSelectedError: false,
      postcodeFillError: false,
    }
  };
  
  handleClick = () => {
    const { getNextSection } = this.props;
    
    try {
      this.validateInputFilled();
    } catch(e) {
    return;
    }
    const { addAddress } = this.props;
    addAddress(this.state.userAddress);
    getNextSection('LOCATION');
  };

  validateInputFilled = () => {
    const { userAddress } = this.state;
    // console.log(userAddress.street.length);
    if (userAddress.street.length === 0) {
      this.setState({ streetFillError: true });
      // throw Error;
    } else {
      this.setState({ streetFillError: false });
    }

    if (userAddress.city.length === 0) {
      this.setState({ cityFillError: true });
      // throw Error;
    } else {
      this.setState({ cityFillError: false });
    }

    if (userAddress.postcode.length === 0) {
      this.setState({ postcodeFillError: true });
      throw Error;
    } else {
      this.setState({ postcodeFillError: false });
    }
  }

  onChangeAddrInput = (e) => {
    const { id, value } = e.target;

    this.setState(prevState => ({
      userAddress: {
        ...prevState.userAddress,
        [id]: [value]
      }
    }));
  }
  
  render() {
    const { CMS } = this.props;
    const { userAddress, streetFillError, cityFillError, stateSelectedError, postcodeFillError } = this.state;
    return (  
      <div className="LocationSection">
        <Heading
          title="Where is you place?"
          icon={<MapLocation />}
        />
        <ul className="LocationSection__wrapper">
          <li className="LocationSection__form-row">
            <label htmlFor="street">Street</label>
            <input type="text" id="street" value={userAddress.street} onChange={(e) => this.onChangeAddrInput(e)} />
          </li>
          {streetFillError && <ErrorMessage>{CMS.streetFillError}</ErrorMessage>}
          <li className="LocationSection__form-row">
            <label htmlFor="city">City</label>
            <input type="text" id="city" value={userAddress.city} onChange={(e) => this.onChangeAddrInput(e)} />
          </li>
          {cityFillError && <ErrorMessage>{CMS.cityFillError}</ErrorMessage>}
          <li className="LocationSection__form-row">
            <label htmlFor="postcode">Postal Code</label>
            <input type="text" id="postcode" value={userAddress.postcode} onChange={(e) => this.onChangeAddrInput(e)} />
          </li>
          {postcodeFillError && <ErrorMessage>{CMS.postcodeFillError}</ErrorMessage>}
          <li className="LocationSection__form-row">
            <label htmlFor="state">State</label>
            <Dropdown className="State__Dropdown" id="state" value={userAddress.state} onChange={(e) => this.onChangeAddrInput(e)}>
              <option value="" disabled>Select</option>
              <option value="NSW">NSW</option>
              <option value="QLD">QLD</option>
              <option value="VIC">VIC</option>
              <option value="WA">WA</option>
              <option value="SA">SA</option>
              <option value="NT">NT</option>
              <option value="NT">TAS</option>
            </Dropdown>
          </li>
        </ul>
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.locationSection,
    address: state.locationState.address,
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
