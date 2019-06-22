import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Description extends React.Component {
  handleClick = () => {
    const { getNextSection, updateAccommodationModel } = this.props;

    updateAccommodationModel();
    getNextSection('DESCRIPTION');
  };

  render() {
    return (
      <div className="DescriptionSection">
        <h3>Description</h3>
        <TextField placeholder="Description" />
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAccommodationModel: Actions.updateAccommodationModel,
}, dispatch);

export default connect(null, mapDispatchToProps)(Description);

Description.defaultProps = {
  getNextSection: null,
};

Description.propTypes = {
  getNextSection: PropTypes.func,
};
