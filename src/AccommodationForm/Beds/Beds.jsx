import PropTypes from 'prop-types';
import React from 'react';
import { AddRoom } from './AddRoom';
import { Bed } from '../../icons';
import { BedListing } from './BedListing';
import {
  Button, Counter, ErrorMessage, Heading,
} from '../../@components';
import { RoomListing } from './RoomListing';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import './Beds.scss';

const uuidv1 = require('uuid/v1');

class Beds extends React.Component {
  constructor(props) {
    super(props);
    this.counterRef = React.createRef();
    this.state = {
      bedsBeingAdded: [],
      bedTypeError: false,
      bedNumbersError: false,
      roomAdditionError: false,
      guestNumberError: false,
      roomArrangementsError: false,
    };
  }

  validateGuestNumberAndRoomArrangements = () => {
    const { roomArrangements } = this.props;
    const numGuests = this.counterRef.current.textContent;

    if (numGuests > 0) {
      this.setState({ guestNumberError: false });
    } else {
      this.setState({ guestNumberError: true });
      throw Error;
    }

    if (roomArrangements.length > 0) {
      this.setState({ roomArrangementsError: false });
    } else {
      this.setState({ roomArrangementsError: true });
      throw Error;
    }
  }

  handleClick = () => {
    const { getNextSection } = this.props;

    try {
      this.validateGuestNumberAndRoomArrangements();
    } catch (e) {
      return;
    }

    getNextSection('BEDS');
  };

  validateBedAddition = (bedType, numBeds) => {
    if (bedType) {
      this.setState({ bedTypeError: false });
    } else {
      this.setState({ bedTypeError: true });
      throw Error;
    }

    if (numBeds !== 0) {
      this.setState({ bedNumbersError: false });
    } else {
      this.setState({ bedNumbersError: true });
      throw Error;
    }
  }

  addBed = (numBeds, bedType) => {
    try {
      this.validateBedAddition(bedType, numBeds);
    } catch (e) {
      return;
    }

    const { bedsBeingAdded } = this.state;
    const { addBed } = this.props;
    const index = bedsBeingAdded.length - 1;

    addBed(bedType);

    this.setState({
      bedsBeingAdded: [...bedsBeingAdded,
        <BedListing
          bedType={bedType}
          numberOfBeds={numBeds}
          handleDelete={this.removeBed}
          index={index}
        />],
    });
  }

  removeBed = (indexToRemove) => {
    const { removeBed } = this.props;
    const { bedsBeingAdded } = this.state;
    const nBedsBeingAdded = bedsBeingAdded.filter((item, index) => index !== indexToRemove);

    removeBed(bedsBeingAdded[indexToRemove].props.bedType);
    this.setState({
      bedsBeingAdded: nBedsBeingAdded,
    });
  }

  validateRoomComplete = () => {
    const { bedsBeingAdded } = this.state;

    if (bedsBeingAdded.length === 0) {
      this.setState({ roomAdditionError: true });
      throw Error;
    } else {
      this.setState({ roomAdditionError: false });
    }
  }

  addRoom = () => {
    try {
      this.validateRoomComplete();
    } catch (e) {
      return;
    }

    const { addRoom, resetOptions } = this.props;
    const { bedsBeingAdded } = this.state;
    addRoom(bedsBeingAdded);
    this.setState({ bedsBeingAdded: [] });
    resetOptions();
  }

  mapBedsBeingAdded = () => {
    const { bedsBeingAdded } = this.state;

    return (
      bedsBeingAdded.map((item, index) => {
        return React.cloneElement(item, { deletable: true, removeBed: this.removeBed, index });
      }));
  }

  render() {
    const {
      CMS, bedTypeOptions, roomArrangements, deleteRoomListing,
    } = this.props;
    const {
      bedNumbersError, bedTypeError, roomAdditionError, roomArrangementsError, guestNumberError,
    } = this.state;

    return (
      <div className="BedSection">
        <Heading
          title="How many guests can your place accommodate?"
          icon={<Bed />}
        />
        <div className="BedSection__Guests">
          <p>Guests</p>
          <Counter min={0} valueRef={this.counterRef} />
        </div>
        {guestNumberError && <ErrorMessage>{CMS.guestNumberError}</ErrorMessage>}
        <div className="BedSection__RoomTypes">
          <h5>{CMS.roomTypeHeader}</h5>
          <p>{CMS.roomTypeDescription}</p>
          { roomArrangements.length > 0 && roomArrangements.map((item, index) => (
            <RoomListing key={uuidv1()} bedListings={item} roomNumber={index} deleteRoomListing={deleteRoomListing} />))}
          <h5>Room {roomArrangements.length + 1}</h5>
          {this.mapBedsBeingAdded()}
          <AddRoom addBed={this.addBed} bedTypeOptions={bedTypeOptions} addRoom={this.addRoom} />
          {bedNumbersError && <ErrorMessage>{CMS.bedNumbersError}</ErrorMessage>}
          {bedTypeError && <ErrorMessage>{CMS.bedTypeError}</ErrorMessage>}
          {roomAdditionError && <ErrorMessage>{CMS.roomAdditionError}</ErrorMessage>}
        </div>
        {roomArrangementsError && <ErrorMessage>{CMS.roomArrangementsError}</ErrorMessage>}
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.roomSection,
    bedTypeOptions: state.bedsState.bedOptions,
    roomArrangements: state.bedsState.roomArrangements,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addBed: Actions.addBed,
  removeBed: Actions.removeBed,
  addRoom: Actions.addRoom,
  resetOptions: Actions.resetOptions,
  deleteRoomListing: Actions.deleteRoomListing,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Beds);

Beds.defaultProps = {
  getNextSection: null,
};

Beds.propTypes = {
  getNextSection: PropTypes.func,
};
