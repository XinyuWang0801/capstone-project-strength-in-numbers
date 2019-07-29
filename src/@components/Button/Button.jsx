import ButtonBootStrap from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './Button.scss';

export const Button = (props) => {
  const { onClick, className, children, variant, block } = props;

  return (
    <ButtonBootStrap variant={variant} onClick={onClick} className={classnames('Button', className)} block={block}>
      {children}
    </ButtonBootStrap>
  );
};


Button.defaultProps = {
  onClick: null,
  children: null,
  className: '',
  variant: "primary",
  block: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  block: PropTypes.bool,
};
