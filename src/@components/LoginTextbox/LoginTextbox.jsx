import PropTypes from 'prop-types';
import React from 'react';
import './LoginTextbox.scss';

export const LoginTextbox = (props) => {
  const { label, exampleLabel, inputRef, type } = props;

  return (
    <div className="LoginTextbox">
      <label className="LoginTextbox__Label" htmlFor={`login-textbox-${label}`} >{label}</label>
      <input
        id={`login-textbox-${label}`}
        name={`login-textbox-${label}`}
        className="LoginTextbox__Input"
        placeholder={exampleLabel}
        type={type}
        ref={inputRef}
      />
    </div>
  );
};

LoginTextbox.defaultProps = {
  label: '',
  exampleLabel: '',
  inputRef: null,
  type: 'text',
};

LoginTextbox.propTypes = {
  label: PropTypes.string,
  exampleLabel: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  type: PropTypes.string,
};
