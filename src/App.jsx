import React from 'react';
import { AccommodationForm } from './AccommodationForm';
import { AccommodationInfo } from './AccommodationInfo';
import { AccountInfo } from './AccountInfo';
import { Explore } from './Explore';
import { HashRouter, Route } from 'react-router-dom';
import { LandingPage } from './LandingPage';
import { LoginPage } from './LoginPage';
import { SignUpPage } from './SignUpPage';
import './App.scss';

const App = () => {
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={LandingPage} />
      <Route path="/explore" component={Explore} />
      <Route path="/accommodation-posting" component={AccommodationForm} />
      <Route path="/accommodation-info" component={AccommodationInfo} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/account-info" component={AccountInfo} />
    </HashRouter>
  );
};

export default App;
