import PropTypes from 'prop-types';
import React from 'react';

export const Beds = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('BEDS');
  };

  return (
    <div>
      <h3>Beds</h3>
      <button type="button" onClick={handleClick}>Continue</button>
    </div>
  );
};

Beds.defaultProps = {
  getNextSection: null,
};

Beds.propTypes = {
  getNextSection: PropTypes.func,
};
