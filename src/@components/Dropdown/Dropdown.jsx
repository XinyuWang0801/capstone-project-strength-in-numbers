import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './Dropdown.scss';

export const Dropdown = (props) => {
  const {
    id, children, selectRef, onClick, onChange, className, defaultValue,
  } = props;

  return (
    <select
      id={id}
      className={classnames('Dropdown', className)}
      ref={selectRef}
      onClick={onClick}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {children}
    </select>
  );
};

Dropdown.defaultProps = {
  children: [],
  id: 'dropdown',
  selectRef: null,
  onClick: null,
  onChange: null,
  className: '',
  defaultValue: '',
};

Dropdown.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  selectRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultValue: PropTypes.string,
};
