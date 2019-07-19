import PropTypes from 'prop-types';
import React from 'react';
import './Heading.scss';

export const Heading = (props) => {
  const { title, icon } = props;

  return (
    <div className="Heading">
      {React.cloneElement(icon, { width: '50px', height: '50px', className: 'Heading__Icon' })}
      <h3 className="Heading--h3">{title}</h3>
    </div>
  );
};

Heading.defaultProps = {
  title: '',
  icon: <></>,
};

Heading.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
};
