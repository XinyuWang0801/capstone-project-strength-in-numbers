import PropTypes from 'prop-types';
import React from 'react';
import { Key } from '../../icons';
import './Navbar.scss';

export const Navbar = (props) => {
  const { color } = props;

  return (
    <div className="Navbar">
      <ol className="Navbar__Ol">
        <li className={`StayIn--${color}`}>
          <span className={`StayIn__Logo StayIn--${color}`}><Key width={50} height={50} /></span>
          <span className="StayIn__Name">
            StayIn
          </span>
        </li>
        <li><span className="Navbar__Item">Host a home</span></li>
        <li><span className="Navbar__Item">Log in</span></li>
      </ol>
    </div>
  );
};

Navbar.defaultProps = {
  color: 'White',
};

Navbar.propTypes = {
  color: PropTypes.string,
};
