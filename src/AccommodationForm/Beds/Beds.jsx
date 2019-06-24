import PropTypes from 'prop-types';
import React from 'react';
import { AddRoom } from './AddRoom';
import { Bed } from '../../icons';
import {
  Button, Counter, Heading,
} from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';
import './Beds.scss';

class Beds extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      bedsBeingAdded: [<AddRoom addBed={this.addBed} />],
    };
  }

  handleClick = () => {
    const { addAccommodationBeds, getNextSection } = this.props;

    const beds = this.inputRef.current.value;

    if (!beds) { return; }

    addAccommodationBeds(beds);
    getNextSection('BEDS');
  };

  addBed = () => {
    console.log("adding bed");
    const { bedsBeingAdded } = this.state;
    this.setState({
      bedsBeingAdded: [...bedsBeingAdded, <AddRoom />],
    });
  }

  addRoom = () => {

  }

  mapBedsBeingAdded = () => {
    const { bedsBeingAdded } = this.state;

    return (
      bedsBeingAdded.map((item, index) => {
        if (index === bedsBeingAdded.length - 1 || (bedsBeingAdded.length === 0)) {
          return React.cloneElement(item, { addBed: this.addBed });
        }
        return React.cloneElement(item, { deletable: true });
      }));
  }

  render() {
    return (
      <div className="BedSection">
        <Heading
          title="How many guests can your place accommodate?"
          icon={<Bed />}
        />
        <div className="BedSection__Guests">
          <p>Guests</p>
          <Counter />
        </div>
        <div className="BedSection__RoomTypes">
          <h5>Sleeping arrangements</h5>
          <p>Provide the types of beds that are available in each room to help people understand the sleeping arrangements</p>
          {this.mapBedsBeingAdded()}
        </div>
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addAccommodationBeds: Actions.addAccommodationBeds,
}, dispatch);

export default connect(null, mapDispatchToProps)(Beds);

Beds.defaultProps = {
  getNextSection: null,
};

Beds.propTypes = {
  getNextSection: PropTypes.func,
};
