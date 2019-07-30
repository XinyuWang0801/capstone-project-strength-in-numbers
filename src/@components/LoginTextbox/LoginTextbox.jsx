import PropTypes from 'prop-types';
import React from 'react';
import './LoginTextbox.scss';

export class LoginTextbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, label, exampleLabel, className, inputRef, type, value, onChange } = this.props;

    return (
      <div className={className}>
        <label className="LoginTextbox__Label" htmlFor={`login-textbox-${label}`} >{label}</label>
        <input
          id={id}
          name={`login-textbox-${label}`}
          className='LoginTextbox__Input'
          placeholder={exampleLabel}
          type={type}
          ref={inputRef}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
};

LoginTextbox.defaultProps = {
  label: '',
  className: 'LoginTextbox',
  exampleLabel: '',
  inputRef: null,
  type: 'text',
};

LoginTextbox.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  exampleLabel: PropTypes.string,
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  type: PropTypes.string,
  value: PropTypes.string,
};
