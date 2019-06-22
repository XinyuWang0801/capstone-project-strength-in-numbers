import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Name extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const { addAccommodationName, getNextSection } = this.props;
    const accommodationName = this.inputRef.current.value;

    if (!accommodationName) { return; }

    addAccommodationName(accommodationName);
    getNextSection('NAME');
  };

  render() {
    return (
      <div className="NameSection">
        <h3>What would you like to call your accomodation?</h3>
        <TextField placeholder="Accommodation name" inputRef={this.inputRef} />
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (exampleState) => {
  return {
    ...exampleState,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addAccommodationName: Actions.addAccommodationName,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Name);

Name.defaultProps = {
  getNextSection: null,
};

Name.propTypes = {
  getNextSection: PropTypes.func,
};
