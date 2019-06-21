import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export const Price = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('PRICE');
  };

  return (
    <div className="PriceSection">
      <h3>Specify price</h3>
      <TextField placeholder="Price" />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Price.defaultProps = {
  getNextSection: null,
};

Price.propTypes = {
  getNextSection: PropTypes.func,
};
