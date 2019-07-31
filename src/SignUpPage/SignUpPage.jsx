// import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { Button, LoginTextbox } from '../@components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as Action from '../store/actions';
import './SignUpPage.scss';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        retype: '',
      },
      errors: {
        firstnameEmpty: false,
        usernameEmpty: false,
        lastnameEmpty: false,
        passwordEmpty: false,
        retypeEmpty: false,
        retypeMatch: false,
      },
    };
  }

  firstnameEmptyCheck = () => {
    const { inputs } = this.state;
    return !inputs.firstname;
  };

  lastnameEmptyCheck = () => {
    const { inputs } = this.state;
    return !inputs.lastname;
  };

  usernameEmptyCheck = () => {
    const { inputs } = this.state;
    return !inputs.email;
  };

  passwordEmptyCheck = () => {
    const { inputs } = this.state;
    return !inputs.password;
  };

  retypeEmptyCheck = () => {
    const { inputs } = this.state;
    return !inputs.retype;
  };

  retypeMatchCheck = () => {
    const { inputs } = this.state;
    return !(inputs.password === inputs.retype);
  };

  validateInputs = () => {
    // Change error state for firstname -- error if empty
    if (this.firstnameEmptyCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          firstnameEmpty: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          firstnameEmpty: false,
        },
      }));
    }

    // Change error state for lastname -- error if empty
    if (this.lastnameEmptyCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          lastnameEmpty: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          lastnameEmpty: false,
        },
      }));
    }

    // Change error state for username/email -- error if empty
    if (this.usernameEmptyCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          usernameEmpty: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          usernameEmpty: false,
        },
      }));
    }

    // Change error state for password -- error if empty
    if (this.passwordEmptyCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          passwordEmpty: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          passwordEmpty: false,
        },
      }));
    }

    // Change error state for retype -- error if empty
    if (this.retypeEmptyCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          retypeEmpty: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          retypeEmpty: false,
        },
      }));
    }
    // Change error state for retypeMatch -- error if no match
    if (this.retypeMatchCheck()) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          retypeMatch: true,
        },
      }));
      throw Error;
    } else {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          retypeMatch: false,
        },
      }));
    }
  };

  onChangeInput = (e) => {
    const { id, value } = e.target;
    this.setState(prevState => ({
      inputs: {
        ...prevState.inputs,
        [id]: value,
      },
    }));
  };

  handleClick = () => {
    try {
      this.validateInputs();
    } catch {
      // If error are detected
    }
  };

  render() {
    const { inputs, errors } = this.state;
    const {
      firstnameEmpty,
      lastnameEmpty,
      usernameEmpty,
      passwordEmpty,
      retypeEmpty,
      retypeMatch,
    } = errors;
    const { firstname, lastname, email, password, retype } = inputs;
    return (
      <div className="SignUpPage">
        <div className="SignUpPage__Form">
          <h1>Sign Up</h1>
          <div className="placeholder" /> {/* Need to remove this */}
          <LoginTextbox
            id="firstname"
            className={firstnameEmpty ? 'LoginTextbox__Fail' : 'LoginTextbox'}
            label="First name"
            exampleLabel="Stevie"
            type="text"
            value={firstname}
            onChange={e => this.onChangeInput(e)}
          />
          <LoginTextbox
            id="lastname"
            className={lastnameEmpty ? 'LoginTextbox__Fail' : 'LoginTextbox'}
            label="Last name"
            exampleLabel="Wonder"
            type="text"
            value={lastname}
            onChange={e => this.onChangeInput(e)}
          />
          {/* {usernameEmpty && <Alert variant='danger' className="LoginPage__Form__Alert">Username cannot be empty</Alert>} */}
          <LoginTextbox
            id="email"
            className={usernameEmpty ? 'LoginTextbox__Fail' : 'LoginTextbox'}
            label="Email"
            exampleLabel="email@example.com"
            type="email"
            value={email}
            onChange={e => this.onChangeInput(e)}
          />
          <div className="placeholder" /> {/* Need to remove this */}
          {/* {passwordEmpty && <Alert variant='danger' className="LoginPage__Form__Alert">Password cannot be empty</Alert>} */}
          <LoginTextbox
            id="password"
            className={
              passwordEmpty || retypeMatch
                ? 'LoginTextbox__Fail'
                : 'LoginTextbox'
            }
            label="Password"
            exampleLabel="Hopefully something secure"
            type="password"
            value={password}
            onChange={e => this.onChangeInput(e)}
          />
          {/* {retypeEmpty && <Alert variant='danger' className="LoginPage__Form__Alert">Passwords didn't match</Alert>} */}
          <LoginTextbox
            id="retype"
            className={
              retypeEmpty || retypeMatch ? 'LoginTextbox__Fail' : 'LoginTextbox'
            }
            label="Re-type Password"
            exampleLabel="Let's test your memory"
            type="password"
            value={retype}
            onChange={e => this.onChangeInput(e)}
          />
          <div className="SignUpPage__Form__Buttons">
            <Button
              variant="success"
              onClick={this.handleClick}
              className="Button__Signup"
              block
            >
              <p className="Button__TextSignUp">Sign up</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpPage);
