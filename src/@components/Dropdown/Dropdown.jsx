import PropTypes from 'prop-types';
import React from 'react';
import './Dropdown.scss';

export const Dropdown = (props) => {
  const {
    id, children, selectRef, onClick, onChange,
  } = props;

  return (
    <div>
      <select id={id} className="Dropdown" ref={selectRef} onClick={onClick} onChange={onChange}>
        {children}
      </select>
    </div>
  );
};

Dropdown.defaultProps = {
  children: [],
  id: 'dropdown',
  selectRef: null,
  onClick: null,
  onChange: null,
};

Dropdown.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  selectRef: PropTypes.instanceOf(Element),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
