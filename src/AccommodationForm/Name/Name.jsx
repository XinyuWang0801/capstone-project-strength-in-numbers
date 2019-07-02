import PropTypes from 'prop-types';
import React from 'react';
import {
  BunkBed, House01, SingleBed,
} from '../../icons';
import {
  Button, Dropdown, ErrorMessage, InputGroup, RadioInput,
} from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import './Name.scss';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyType: null,
      propertyTypeError: null,
      spaceType: null,
      spaceTypeError: null,
    };
  }

  handleClick = () => {
    const { getNextSection } = this.props;
    const { propertyType, spaceType } = this.state;

    if (propertyType) {
      this.setState({ propertyTypeError: false });
    } else {
      this.setState({ propertyTypeError: true });
      return;
    }

    if (spaceType) {
      this.setState({ spaceTypeError: false });
    } else {
      this.setState({ spaceTypeError: true });
      return;
    }

    getNextSection('NAME');
  };

  getRadioInputs = () => {
    const options = [{ description: 'Entire place', icon: <House01 /> },
      { description: 'Private room', icon: <SingleBed /> },
      { description: 'Shared room', icon: <BunkBed /> }];

    return (
      <InputGroup>
        {options.map((item, index) => (
          <RadioInput
            id={`RoomType_${index}`}
            name="RoomTypes"
            onChange={this.onRadioInputSelect}
            value={item.description}
            key={item.description}
          >
            {React.cloneElement(item.icon, { width: '60px', height: '60px' })}
            <p> {item.description} </p>
          </RadioInput>
        ))}
      </InputGroup>
    );
  }

  onRadioInputSelect = (e) => {
    this.setState({ spaceType: e.target.value });
  }

  getDropdownOptions = () => {
    const options = ['House', 'Apartment', 'Townhouse', 'Cottage'];

    return (options.map(item => <option value={item} key={item}>{item}</option>));
  }

  onDropdownSelect = (e) => {
    this.setState({ propertyType: e.target.value });
  }

  render() {
    const { propertyTypeError, spaceTypeError } = this.state;

    return (
      <div className="NameSection">
        <br />
        <div className="NameSection__Title">
          <House01 width="50px" height="50px" className="NameSection__Icon" />
          <h3 className="NameSection__Title--noMargin">Lets get some details about the property</h3>
        </div>
        <h5>What would you classify your property as?</h5>
        <Dropdown defaultValue="" onChange={this.onDropdownSelect}>
          <option value="" disabled>Select property type</option>
          {this.getDropdownOptions()}
        </Dropdown>
        {propertyTypeError && <ErrorMessage>Please provide a classification for your property</ErrorMessage>}
        <br />
        <h5>The guests will have:</h5>
        {this.getRadioInputs()}
        {spaceTypeError && <ErrorMessage>Please select the type of space your guests will have</ErrorMessage>}
        <br />
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (exampleState) => {
  return {
    ...exampleState,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addAccommodationName: Actions.addAccommodationName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Name);

Name.defaultProps = {
  getNextSection: null,
};

Name.propTypes = {
  getNextSection: PropTypes.func,
};
