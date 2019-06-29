import PropTypes from 'prop-types';
import React from 'react';
import { Button, Counter, Dropdown } from '../../../@components';
import './AddRoom.scss';

export class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.counterRef = React.createRef();
    this.selectRef = React.createRef();
  }

  getBedTypes = () => {
    const { bedTypeOptions } = this.props;

    return (bedTypeOptions.map(item => <option value={item} key={item}>{item}</option>));
  };

  onDeleteClicked = (e) => {
    const { removeBed } = this.props;
    removeBed(Number(e.target.value));
  };

  onAddBedClicked = () => {
    const { addBed } = this.props;

    const numBeds = this.counterRef.current.textContent;
    const bedType = this.selectRef.current.value;
    addBed(Number(numBeds), bedType);
  };

  onAddRoomClicked = () => {
    const { addRoom } = this.props;

    addRoom();
  }

  render() {
    const { bedTypeOptions } = this.props;
    return (
      <div className="AddRoom">
        {bedTypeOptions.length > 0 && (
          <Dropdown className="AddRoom__Dropdown" selectRef={this.selectRef} defaultValue="">
            <option value="" disabled>Bed Type</option>
            {this.getBedTypes()}
          </Dropdown>
        ) }
        {bedTypeOptions.length > 0 && <Counter valueRef={this.counterRef} min={0} />}
        {bedTypeOptions.length > 0 && <Button className="AddRoom__Button" onClick={this.onAddBedClicked}>Add Beds</Button>}
        <Button onClick={this.onAddRoomClicked} className="AddRoom__Button">Done</Button>
      </div>
    );
  }
}

AddRoom.defaultProps = {
  addBed: null,
  removeBed: null,
};

AddRoom.propTypes = {
  addBed: PropTypes.func,
  removeBed: PropTypes.func,
  addRoom: PropTypes.isRequired,
  bedTypeOptions: PropTypes.array.isRequired,
};
