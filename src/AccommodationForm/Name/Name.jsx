import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';

export class Name extends React.Component {
  handleClick = () => {
    const { getNextSection } = this.props;

    getNextSection('NAME');
  };

  render() {
    return (
      <div className="NameSection">
        <h3>What would you like to call your accomodation?</h3>
        <TextField placeholder="Accommodation name" />
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

Name.defaultProps = {
  getNextSection: null,
};

Name.propTypes = {
  getNextSection: PropTypes.func,
};
