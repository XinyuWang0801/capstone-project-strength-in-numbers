import PropTypes from 'prop-types';
import React from 'react';

export const Description = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('DESCRIPTION');
  };

  return (
    <div>
      <h3>Description</h3>
      <button type="button" onClick={handleClick}>Continue</button>
    </div>
  );
};

Description.defaultProps = {
  getNextSection: null,
};

Description.propTypes = {
  getNextSection: PropTypes.func,
};
