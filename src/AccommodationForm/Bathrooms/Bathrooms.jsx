import PropTypes from 'prop-types';
import React from 'react';
import { Bathroom as BathroomIcon } from '../../icons';
import { Button, Icon } from 'antd';
import { Counter, ErrorMessage, Heading } from '../../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

import './Bathrooms.scss';

class Bathroom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberError: false,
    };
    this.counterRef = React.createRef();
  }

  handleClick = () => {
    const { addBathroom, getNextSection } = this.props;

    const hasNotProvidedNumber = this.counterRef.current.textContent === '0';
    this.setState({ numberError: hasNotProvidedNumber });

    if (hasNotProvidedNumber) { return; }

    addBathroom(this.counterRef.current.textContent);
    getNextSection('BATHROOM');
  };

  render() {
    const { numberError } = this.state;
    const { CMS: { bathroomHeader, bathroomDescription, bathroomNumberError } } = this.props;

    return (
      <div className="BathroomSection">
        <Heading
          title={bathroomHeader}
          icon={<BathroomIcon />}
        />
        <p>{bathroomDescription}</p>
        <div className="BathroomSection__Input">
          <h4>Bathrooms</h4>
          <Counter min={0} incrementBy={0.5} valueRef={this.counterRef} />
        </div>
        {numberError && <ErrorMessage>{bathroomNumberError}</ErrorMessage>}
        <Button onClick={this.handleClick} type="primary" className="antd__Button--centered" size="large">
          CONTINUE
          <Icon type="right" />
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.bathroomSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addBathroom: Actions.addBathroom,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Bathroom);

Bathroom.defaultProps = {
  getNextSection: null,
};

Bathroom.propTypes = {
  getNextSection: PropTypes.func,
};
