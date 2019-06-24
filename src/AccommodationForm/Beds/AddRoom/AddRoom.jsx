import PropTypes from 'prop-types';
import React from 'react';
import { Button, Counter, Dropdown } from '../../../@components';
import './AddRoom.scss';

export const AddRoom = (props) => {
  const { addBed, deletable } = props;

  const getBedTypes = () => {
    const options = ['Single Bed', 'Double Bed', 'Queen Bed', 'King Bed'];

    return (options.map(item => <option value={item}>{item}</option>));
  };

  return (
    <div className="AddRoom">
      <Dropdown className="AddRoom__Dropdown">
        <option value="Bed Type" selected disabled>Bed Type</option>
        {getBedTypes()}
      </Dropdown>
      <Counter />
      { deletable && <i className="material-icons AddRoom__DeleteBtn">delete</i>}
      { !deletable && (
      <>
        <Button className="AddRoom__Button" onClick={addBed}>Add Beds</Button>
        <Button className="AddRoom__Button">Done</Button>
      </>
      )}
    </div>
  );
};

AddRoom.defaultProps = {
  deletable: false,
  addBed: null,
};

AddRoom.propTypes = {
  deletable: PropTypes.bool,
  addBed: PropTypes.func,
};
