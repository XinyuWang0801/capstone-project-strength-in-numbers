import PropTypes from 'prop-types';
import React from 'react';
import { Button } from '../../@components';
import './Bathrooms.scss';

export default class Bathroom extends React.Component {
  handleClick = () => {
    const { getNextSection } = this.props;

    getNextSection('BATHROOM');
  };

  render() {
    return (
      <div className="BathroomSection">
        <h3>How many bathrooms?</h3>
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

Bathroom.defaultProps = {
  getNextSection: null,
};

Bathroom.propTypes = {
  getNextSection: PropTypes.func,
};
