import PropTypes from 'prop-types';
import React from 'react';
import { Key } from '../../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as Actions from '../../store/actions';
import './Navbar.scss';

class Navbar extends React.Component {
  navigateToHostAccommodation = () => {
    const { history, navigateToHostHome } = this.props;

    navigateToHostHome(history);
  };

  navigateToLandingPage = () => {
    const { history } = this.props;

    history.push('');
  }

  navigateToLogin = () => {
    const { history, navigateToLogin } = this.props;

    navigateToLogin(history);
  }

  navigateToAccount = () => {
    const { history, navigateToAccountInfo } = this.props;

    navigateToAccountInfo(history);
  }

  render() {
    const { className, color, id } = this.props;

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
          {id && <li><span className="Navbar__Item" onClick={this.navigateToAccount}>Account</span></li>}
          {!id && <li><span className="Navbar__Item" onClick={this.navigateToLogin}>Log in</span></li>}
        </ol>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigateToLogin: Actions.navigateToLogin,
  navigateToAccountInfo: Actions.navigateToAccountInfo,
  navigateToHostHome: Actions.navigateToHostHome,
}, dispatch);

const mapStateToProps = (state) => {
  return {
    id: state.accountState.id,
  };
};


Navbar.defaultProps = {
  color: 'White',
};

Navbar.propTypes = {
  color: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
