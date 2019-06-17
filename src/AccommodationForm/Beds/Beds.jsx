import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export const Beds = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('BEDS');
  };

  return (
    <div className="BedSection">
      <h3>How many beds?</h3>
      <TextField placeholder="Beds..." />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Beds.defaultProps = {
  getNextSection: null,
};

Beds.propTypes = {
  getNextSection: PropTypes.func,
};
