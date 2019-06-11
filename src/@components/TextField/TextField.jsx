import PropTypes from 'prop-types';
import React from 'react';
import './TextField.scss';

export const TextField = (props) => {
  const { placeholder } = props;

  return (
    <input className="TextField" type="text" placeholder={placeholder} />
  );
};


TextField.defaultProps = {
  placeholder: '',
};

TextField.propTypes = {
  placeholder: PropTypes.string,
};
