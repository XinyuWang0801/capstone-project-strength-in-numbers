import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './Dropdown.scss';

export const Dropdown = (props) => {
  const {
    id, children, selectRef, onClick, onChange, className,
  } = props;

  return (
    <select id={id} className={classnames('Dropdown', className)} ref={selectRef} onClick={onClick} onChange={onChange}>
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
};

Dropdown.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  selectRef: PropTypes.instanceOf(Element),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
