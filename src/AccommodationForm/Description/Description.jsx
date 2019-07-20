import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField, TextArea } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  };

  handleClick = () => {
    const { getNextSection, updateAccommodationModel } = this.props;
    this.addDescription();
    console.log(this.state);
    updateAccommodationModel();
    getNextSection('DESCRIPTION');
  };

  onDescriptionChange = (e) => {
    console.log(e.target.value);
    this.setState({
      description: e.target.value,
    })
  }

  addDescription = () => {
    const { addDescription } = this.props;
    addDescription(this.state.description);
  }

  render() {
    return (
      <div className="DescriptionSection">
        <h3>You can add more details about the place...</h3>
        <TextArea placeholder="Description" onChange={(e) => this.onDescriptionChange(e)} />
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
  addDescription: Actions.addDescription,
}, dispatch);

export default connect(null, mapDispatchToProps)(Description);

Description.defaultProps = {
  getNextSection: null,
};

Description.propTypes = {
  getNextSection: PropTypes.func,
};
