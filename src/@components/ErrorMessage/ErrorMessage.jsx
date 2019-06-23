import React from 'react';
import './ErrorMessage.scss';

export const ErrorMessage = (props) => {
  const { children } = props;
  
  return (
    <span className="ErrorMessage">
      <i className="material-icons">error</i>
      {children}
    </span>
  );
};
