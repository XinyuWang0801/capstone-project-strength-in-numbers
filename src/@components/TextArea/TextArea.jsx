import PropTypes from 'prop-types';
import React from 'react';
import './TextArea.scss';

export const TextArea = (props) => {
  const { placeholder, inputRef, onChange } = props;

  return (
    <textarea className="TextArea" type="text" placeholder={placeholder} ref={inputRef} onChange={onChange} />
  );
};


TextArea.defaultProps = {
  placeholder: '',
};

TextArea.propTypes = {
  placeholder: PropTypes.string,
};
