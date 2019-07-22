import PropTypes from 'prop-types';
import React from 'react';
import './Textbox.scss';

export const Textbox = (props) => {
  const { label, inputRef, type } = props;

  return (
    <div className="Textbox">
      <input
        id={`textbox-${label}`}
        name={`textbox-${label}`}
        className="Textbox__Input"
        placeholder={label}
        type={type}
        ref={inputRef}
      />
      <label className="Textbox__Label" htmlFor="textbox-input">{label}</label>
    </div>
  );
};

Textbox.defaultProps = {
  label: '',
  inputRef: null,
  type: 'text',
};

Textbox.propTypes = {
  label: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  type: PropTypes.string,
};
