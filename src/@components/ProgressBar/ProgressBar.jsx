import ProgressBarBS from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import React from 'react';
import './ProgressBar.scss';

export const ProgressBar = (props) => {
  const { children, now } = props;
  return (
    <div className="ProgressBar">
      <ProgressBarBS className="ProgressBar__Container" variant="ProgressBar__Container__Blue" now={now} />
      {children}
    </div>
  );
};


ProgressBar.defaultProps = {
  now: 0,
  children: null,
};

ProgressBar.propTypes = {
  now: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
