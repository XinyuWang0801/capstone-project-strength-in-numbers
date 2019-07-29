import React from 'react';
import { AccommodationForm } from './AccommodationForm';
import { AccommodationInfo } from './AccommodationInfo';
import { Explore } from './Explore';
import { LandingPage } from './LandingPage';
import { SignUpPage} from './SignUpPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={SignUpPage} />
      <Route path="/explore" component={Explore} />
      <Route path="/accommodation-posting" component={AccommodationForm} />
      <Route path="/accommodation-info" component={AccommodationInfo} />
    </Router>
  );
};

export default App;
