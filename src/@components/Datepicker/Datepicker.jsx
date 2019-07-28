import PropTypes from 'prop-types';
import React from 'react';
import './Datepicker.scss';

export const Datepicker = (props) => {
  const { label, id, inputRef } = props;

  const changeToDate = (e) => {
    e.target.type = 'date';
  };

  const handleBlur = (e) => {
    e.target.type = 'text';
  };

  return (
    <div className="Datepicker">
      <input
        className="Datepicker__Input"
        id={`datepicker-${id}`}
        name={`datepicker-${id}`}
        autoComplete="off"
        onFocus={changeToDate}
        onBlur={handleBlur}
        placeholder={label}
        ref={inputRef}
      />
      <label className="Datepicker__Label" htmlFor={`datepicker-${id}`}>{label}</label>
    </div>
  );
};

Datepicker.defaultProps = {
  label: '',
};

Datepicker.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};
