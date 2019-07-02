import PropTypes from 'prop-types';
import React from 'react';
import './RadioInput.scss';

export const RadioInput = (props) => {
  const {
    id, name, children, radioRef, onClick, onChange, value,
  } = props;

  return (
    <>
      <input
        type="radio"
        id={id}
        name={name}
        ref={radioRef}
        onClick={onClick}
        onChange={onChange}
        value={value}
      />
      <label className="RadioInput__Container" htmlFor={id}>
        <div className="RadioInput__Contents">
          {children}
        </div>
      </label>
    </>
  );
};

RadioInput.defaultProps = {
  children: [],
  id: 'radio',
  radioRef: null,
  onClick: null,
  onChange: null,
  value: null,
};

RadioInput.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  radioRef: PropTypes.instanceOf(Element),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
