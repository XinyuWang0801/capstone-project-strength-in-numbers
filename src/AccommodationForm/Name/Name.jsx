import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';
import './Name.scss';

export const Name = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('NAME');
  };

  return (
    <div className="NameSection">
      <h3>What would you like to call your accomodation?</h3>
      <TextField placeholder="Accommodation name" />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Name.defaultProps = {
  getNextSection: null,
};

Name.propTypes = {
  getNextSection: PropTypes.func,
};
