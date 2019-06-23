import PropTypes from 'prop-types';
import React from 'react';
import { Button, TextField } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

class Beds extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleClick = () => {
    const { addAccommodationBeds, getNextSection } = this.props;

    const beds = this.inputRef.current.value;

    if (!beds) { return; }

    addAccommodationBeds(beds);
    getNextSection('BEDS');
  };

  render() {
    return (
      <div className="BedSection">
        <h3>How many beds?</h3>
        <TextField placeholder="Beds..." inputRef={this.inputRef} />
        <Button onClick={this.handleClick}>
          <p className="Button__Text">CONTINUE</p>
          <i className="material-icons">navigate_next</i>
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addAccommodationBeds: Actions.addAccommodationBeds,
}, dispatch);

export default connect(null, mapDispatchToProps)(Beds);

Beds.defaultProps = {
  getNextSection: null,
};

Beds.propTypes = {
  getNextSection: PropTypes.func,
};
