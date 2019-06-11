import ButtonBootStrap from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import React from 'react';
import './Button.scss';

export const Button = (props) => {
  const { onClick, children } = props;

  return (
    <ButtonBootStrap variant="primary" onClick={onClick} className="Button">
      {children}
    </ButtonBootStrap>
  );
};


Button.defaultProps = {
  onClick: null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
