import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export const Description = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('DESCRIPTION');
  };

  return (
    <div className="DescriptionSection">
      <h3>Description</h3>
      <TextField placeholder="Description" />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Description.defaultProps = {
  getNextSection: null,
};

Description.propTypes = {
  getNextSection: PropTypes.func,
};
