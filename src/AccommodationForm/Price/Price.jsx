import PropTypes from 'prop-types';
import React from 'react';

export const Price = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('PRICE');
  };

  return (
    <div>
      <h3>Price</h3>
      <button type="button" onClick={handleClick}>Continue</button>
    </div>
  );
};

Price.defaultProps = {
  getNextSection: null,
};

Price.propTypes = {
  getNextSection: PropTypes.func,
};
