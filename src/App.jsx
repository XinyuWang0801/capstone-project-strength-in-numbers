import React from 'react';
import { AccommodationForm } from './AccommodationForm';
import { AccommodationInfo } from './AccommodationInfo';
import { AccountInfo } from './AccountInfo';
import { Explore } from './Explore';
import { HashRouter, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './store/actions';
import './App.scss';

export class App extends React.Component {
  componentDidMount() {
    const { getCMSContent } = this.props;
    getCMSContent();
  }

  render() {
    return (
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/explore" exact component={Explore} />
        <Route path="/accommodation-posting" exact component={AccommodationForm} />
        <Route path="/accommodation-info" exact component={AccommodationInfo} />
        <Route path="/signup" exact component={SignUpPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/account-info" exact component={AccountInfo} />
      </HashRouter>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getCMSContent: Actions.getCMSContent,
}, dispatch);

export default connect(null, mapDispatchToProps)(App);
