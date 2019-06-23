import PropTypes from 'prop-types';
import React from 'react';
import './TextField.scss';

export const TextField = (props) => {
  const { placeholder, inputRef } = props;

  return (
    <input className="TextField" type="text" placeholder={placeholder} ref={inputRef} />
  );
};


TextField.defaultProps = {
  placeholder: '',
};

TextField.propTypes = {
  placeholder: PropTypes.string,
};
