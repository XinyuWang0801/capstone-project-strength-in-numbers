import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import './BubbleIcon.scss';

export const BubbleIcon = (props) => {
  const { onClick, children, toggled } = props;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e.currentTarget);
    }
  };

  return (
    <button type="button" className={classnames('BubbleIcon', { 'BubbleIcon__Toggled': toggled })} {...props} onClick={handleClick}>
      <span className="BubbleIcon__Image">
        {children}
      </span>
    </button>
  );
};


BubbleIcon.defaultProps = {
  onClick: null,
  children: null,
  toggled: false,
};

BubbleIcon.propTypes = {
  toggled: PropTypes.bool, // Describes whether the icon should have a bubble or not
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
