import PropTypes from 'prop-types';
import React from 'react';
import './Counter.scss';

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  increment = () => {
    const { max } = this.props;
    const { value } = this.state;

    if (max && value + 1 > max) { return; }
    this.setState({ value: value + 1 });
  }

  decrement = () => {
    const { min } = this.props;
    const { value } = this.state;

    if (min !== undefined && min > value - 1) { return; }
    this.setState({ value: value - 1 });
  }

  render() {
    const { valueRef } = this.props;
    const { value } = this.state;

    return (
      <div className="Counter">
        <button type="button" className="Counter__Button" onClick={this.decrement}>-</button>
        <p className="Counter__Value" ref={valueRef}>{value}</p>
        <button type="button" className="Counter__Button" onClick={this.increment}>+</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  min: undefined,
  max: undefined,
  valueRef: undefined,
};

Counter.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  valueRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
