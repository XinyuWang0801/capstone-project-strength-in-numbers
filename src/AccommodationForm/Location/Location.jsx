import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export const Location = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('LOCATION');
  };

  return (
    <div className="LocationSection">
      <h3>Specify Location</h3>
      <TextField placeholder="Location" />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Location.defaultProps = {
  getNextSection: null,
};

Location.propTypes = {
  getNextSection: PropTypes.func,
};
