import ButtonBootStrap from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './Button.scss';

export const Button = (props) => {
  const { onClick, className, children } = props;

  return (
    <ButtonBootStrap variant="primary" onClick={onClick} className={classnames('Button', className)}>
      {children}
    </ButtonBootStrap>
  );
};


Button.defaultProps = {
  onClick: null,
  children: null,
  className: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
};
