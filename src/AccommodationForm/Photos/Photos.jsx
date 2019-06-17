import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export const Photos = (props) => {
  const { getNextSection } = props;

  const handleClick = () => {
    getNextSection('PHOTOS');
  };

  return (
    <div className="PhotosSection">
      <h3>Photos</h3>
      <TextField placeholder="Photos" />
      <Button onClick={handleClick}>
        <p className="Button__Text">CONTINUE</p>
        <i className="material-icons">navigate_next</i>
      </Button>
    </div>
  );
};

Photos.defaultProps = {
  getNextSection: null,
};

Photos.propTypes = {
  getNextSection: PropTypes.func,
};
