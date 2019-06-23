import React from 'react';
import './InputGroup.scss';

export const InputGroup = (props) => {
  const { children } = props;

  return (
    <div className="InputGroup">
      {children}
    </div>
  );
};
