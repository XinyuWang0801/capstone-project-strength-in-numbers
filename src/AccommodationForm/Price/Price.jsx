import PropTypes from 'prop-types';
import React from 'react';
import { Button, Icon, Input } from 'antd';
import { ErrorMessage, Heading } from '../../@components';
import { PriceTag } from '../../icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../store/actions';

import './Price.scss';

class Price extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      nonNumericError: false,
      emptyError: false,
      negativeError: false,
    };
  }

  handlePriceChanged = (e) => {
    this.setState({
      price: e.target.value,
    });
  }

  handleClick = () => {
    const { price } = this.state;
    const { addPrice, getNextSection } = this.props;

    // validate that price is numeric and positive
    const hasEmptyError = !price;
    const hasNonNumericError = !!price.match(/[^0-9.]/g);
    const hasNegativeError = Number(price) <= 0;

    this.setState({
      emptyError: hasEmptyError,
      nonNumericError: hasNonNumericError,
      negativeError: hasNegativeError,
    });

    if (hasEmptyError || hasNonNumericError || hasNegativeError) {
      return;
    }

    addPrice(price);
    getNextSection('PRICE');
  };

  formatPriceEntered = (e) => {
    const isNonNumeric = !!e.target.value.match(/[^0-9.]/g);
    if (isNonNumeric) { return; }

    this.setState({
      price: Number(e.target.value).toPrecision(4),
    });
  }

  render() {
    const { CMS } = this.props;
    const { emptyError, nonNumericError, negativeError, price } = this.state;

    return (
      <div className="PriceSection">
        <Heading
          title={CMS.priceHeader}
          icon={<PriceTag />}
        />
        <br />
        <br />
        <div className="antd__CurrencyContainer">
          <Input
            size="large"
            className="antd__CurrencyContainer--input"
            onChange={this.handlePriceChanged}
            onBlur={this.formatPriceEntered}
            value={price}
          />
        </div>
        {(emptyError || negativeError) && <ErrorMessage>{emptyError ? CMS.emptyError : CMS.negativeError}</ErrorMessage>}
        {nonNumericError && <ErrorMessage>{CMS.nonNumericError}</ErrorMessage>}
        <br />
        <br />
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
    CMS: state.CMS.priceSection,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  addPrice: Actions.addPrice,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Price);

Price.defaultProps = {
  getNextSection: null,
};

Price.propTypes = {
  getNextSection: PropTypes.func,
};
