import React from 'react';
import { AccommodationForm } from './AccommodationForm';
import { AccommodationInfo } from './AccommodationInfo';
import { Explore } from './Explore';
import { LandingPage } from './LandingPage';
import { LoginPage } from './LoginPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { SignUpPage } from './SignUpPage';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={LandingPage} />
      <Route path="/explore" component={Explore} />
      <Route path="/accommodation-posting" component={AccommodationForm} />
      <Route path="/accommodation-info" component={AccommodationInfo} />
      <Route path="/signup" component={SignUpPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  );
};

export default App;
