import PropTypes from 'prop-types';
import React from 'react';
import {
  Button, Datepicker, Dropdown, ErrorMessage, Textbox,
} from '../../@components';
import './Search.scss';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
    };
    this.locationInputRef = React.createRef();
    this.checkInInputRef = React.createRef();
    this.checkOutInputRef = React.createRef();
    this.guestNumberRef = React.createRef();
  }

  validateDateRange = (start, end) => {
    return Date.parse(start) < Date.parse(end);
  }

  handleSearchClicked = () => {
    const {
      CMS: {
        locationRequired, daysRequired, guestNumberRequired, validDateRange,
      }, searchFunc,
    } = this.props;

    if (!this.locationInputRef.current.value) {
      this.setState({ errorMessage: locationRequired });
      return;
    }

    if (!this.checkInInputRef.current.value || !this.checkOutInputRef.current.value) {
      this.setState({ errorMessage: daysRequired });
      return;
    }
    if (!this.validateDateRange(this.checkInInputRef.current.value, this.checkOutInputRef.current.value)) {
      this.setState({ errorMessage: validDateRange });
      return;
    }

    if (!this.guestNumberRef.current.value) {
      this.setState({ errorMessage: guestNumberRequired });
      return;
    }

    this.setState({ errorMessage: null });
    searchFunc(this.locationInputRef.current.value, this.checkInInputRef.current.value, this.guestNumberRef.current.value);
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <div className="Search">
        <div className="Search__Input">
          <Textbox label="Location" inputRef={this.locationInputRef} />
          <Datepicker label="Check in" id="check-in" inputRef={this.checkInInputRef} />
          <Datepicker label="Check out" id="check-out" inputRef={this.checkOutInputRef} />
          <Dropdown selectRef={this.guestNumberRef}>
            <option value="" disabled>Guests</option>
            {[...Array(7).keys()].map(item => <option value={item + 1}>{item + 1}</option>)}
          </Dropdown>
          <Button onClick={this.handleSearchClicked}><i className="material-icons">search</i></Button>
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
