import PropTypes from 'prop-types';
import React from 'react';

export const Location = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('LOCATION');
  };

  return (
    <div>
      <h3>Location</h3>
      <button type="button" onClick={handleClick}>Continue</button>
    </div>
  );
};

Location.defaultProps = {
  getNextSection: null,
};

Location.propTypes = {
  getNextSection: PropTypes.func,
};
