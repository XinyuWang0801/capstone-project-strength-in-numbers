import PropTypes from 'prop-types';
import React from 'react';
import {
  BunkBed, House01, SingleBed,
} from '../../icons';
import { Button, Icon, Input, Select } from 'antd';
import { ErrorMessage, Heading, InputGroup, RadioInput } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import './Name.scss';

const { Option } = Select;

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyType: null,
      propertyTypeError: null,
      spaceType: null,
      spaceTypeError: null,
      propertyName: null,
      propertyNameError: null,
    };
  }

  handleClick = () => {
    const { getNextSection, completeNameSection } = this.props;
    const { propertyType, propertyName, spaceType } = this.state;

    const hasPropertyTypeError = !propertyType;
    const hasSpaceTypeError = !spaceType;
    const hasPropertyNameError = !propertyName;

    this.setState({
      propertyTypeError: hasPropertyTypeError,
      spaceTypeError: hasSpaceTypeError,
      propertyNameError: hasPropertyNameError,
    });

    if (hasPropertyTypeError || hasSpaceTypeError || hasPropertyNameError) {
      return;
    }

    completeNameSection({ propertyType, spaceType, propertyName });
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

    return (options.map(item => <Option value={item} key={item}>{item}</Option>));
  }

  onDropdownSelect = (value) => {
    this.setState({ propertyType: value });
  }

  onInputChanged = (e) => {
    this.setState({ propertyName: e.target.value });
  }

  render() {
    const { CMS } = this.props;
    const { propertyTypeError, propertyNameError, spaceTypeError } = this.state;

    return (
      <div className="NameSection">
        <br />
        <Heading
          title={CMS.nameHeader}
          icon={<House01 />}
        />
        <h5>{CMS.propertyClassification}</h5>
        <Select
          onChange={this.onDropdownSelect}
          size="large"
          style={{ width: 400 }}
          defaultValue="Select property type"
        >
          <Option value="" disabled>Select property type</Option>
          {this.getDropdownOptions()}
        </Select>
        {propertyTypeError && <ErrorMessage>{CMS.propertyTypeError}</ErrorMessage>}
        <div className="NameSection__PropertyName">
          <h5>{CMS.nameQuestion}</h5>
          <Input size="large" placeholder="Property name..." style={{ width: 400 }} onChange={this.onInputChanged} />
          {propertyNameError && <ErrorMessage>{CMS.propertyNameError}</ErrorMessage>}
        </div>
        <h5>{CMS.guestSpace}</h5>
        {this.getRadioInputs()}
        {spaceTypeError && <ErrorMessage>{CMS.spaceTypeError}</ErrorMessage>}
        <br />
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
    CMS: state.CMS.nameSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addAccommodationName: Actions.addAccommodationName,
  completeNameSection: Actions.completeNameSection,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Name);

Name.defaultProps = {
  getNextSection: null,
};

Name.propTypes = {
  getNextSection: PropTypes.func,
};
