import PropTypes from 'prop-types';
import React from 'react';
import firebaseApp from '../../firebase/index';
import { Key } from '../../icons';
import { withRouter } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component {
  navigateToHostAccommodation = () => {
    const { history } = this.props;

    history.push('accommodation-posting');
  };

  navigateToLandingPage = () => {
    const { history } = this.props;

    history.push('');
  }

  render() {
    const { className, color } = this.props;

    return (
      <div className={`Navbar ${className}`}>
        <ol className="Navbar__Ol">
          <li className={`StayIn--${color}`}>
            <span className={`StayIn__Logo StayIn--${color}`}><Key width={50} height={50} /></span>
            <span className="StayIn__Name" onClick={this.navigateToLandingPage}>
              StayIn
            </span>
          </li>
          <li><span className="Navbar__Item" onClick={this.navigateToHostAccommodation}>Host a home</span></li>
          <li><span className="Navbar__Item">Log in</span></li>
          <li><span className="Navbar__Item" onClick={() => firebaseApp.auth().signOut()}>Sign Out</span></li>
        </ol>
      </div>
    );
  }
}

Navbar.defaultProps = {
  color: 'White',
};

Navbar.propTypes = {
  color: PropTypes.string,
};

export default withRouter(Navbar);
