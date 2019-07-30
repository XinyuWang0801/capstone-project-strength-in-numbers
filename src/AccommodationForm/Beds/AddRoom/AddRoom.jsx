import PropTypes from 'prop-types';
import React from 'react';
import { Button, Counter } from '../../../@components';
import { Select } from 'antd';
import './AddRoom.scss';

const { Option } = Select;

export class AddRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bedType: null,
    };
    this.counterRef = React.createRef();
  }

  getBedTypes = () => {
    const { bedTypeOptions } = this.props;

    return (bedTypeOptions.map(item => <Option value={item} key={item}>{item}</Option>));
  };

  onDeleteClicked = (e) => {
    const { removeBed } = this.props;
    removeBed(Number(e.target.value));
  };

  onAddBedClicked = () => {
    const { bedType } = this.state;
    const { addBed } = this.props;
    const numBeds = this.counterRef.current.textContent;

    addBed(Number(numBeds), bedType);
  };

  onAddRoomClicked = () => {
    const { addRoom } = this.props;

    addRoom();
  }

  handleSelectChanged = (val) => {
    this.setState({ bedType: val });
  }

  render() {
    const { bedTypeOptions } = this.props;
    return (
      <div className="AddRoom">
        {bedTypeOptions.length > 0 && (
          <Select
            className="AddRoom__Dropdown"
            onChange={this.handleSelectChanged}
            size="large"
            defaultValue=""
          >
            <Option value="" disabled>Bed Type</Option>
            {this.getBedTypes()}
          </Select>
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
