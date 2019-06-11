import PropTypes from 'prop-types';
import React from 'react';

export const Photos = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('PHOTOS');
  };

  return (
    <div>
      <h3>Photos</h3>
      <button type="button" onClick={handleClick}>Continue</button>
    </div>
  );
};

Photos.defaultProps = {
  getNextSection: null,
};

Photos.propTypes = {
  getNextSection: PropTypes.func,
};
