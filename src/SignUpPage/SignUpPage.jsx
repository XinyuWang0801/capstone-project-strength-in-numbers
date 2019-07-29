import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, LoginTextbox, ErrorMessage } from '../@components';
import Alert from 'react-bootstrap/Alert';
import * as Action from '../store/actions';
import './SignUpPage.scss';

class SignUpPage extends React.Component {
  constructor(props) {
    super(props)
    this.usernameRef = React.createRef()
    this.state = {
      usernameEmptyError: false,
      passwordEmptyError: false,
      retypeEmptyError: false,
    }
  }

  handleClick = () => {
    // Need to implement error checking with Refs
    // Have to change LoginTextbox from a functional --> class component
    // As refs don't work with functional components
  }

  render() {
    const { usernameEmptyError, passwordEmptyError, retypeEmptyError } = this.state
    return (
      <div className="SignUpPage">
        <div className="SignUpPage__Form">
          <h1>Sign Up</h1>
          {usernameEmptyError && <Alert variant='danger' className="LoginPage__Form__Alert">Username cannot be empty</Alert>}
          <LoginTextbox id="username" className={usernameEmptyError ? "LoginTextbox__Fail":"LoginTextbox"} label="Email" exampleLabel="email@example.com" type="email" ref={this.usernameRef} />
          {passwordEmptyError && <Alert variant='danger' className="LoginPage__Form__Alert">Password cannot be empty</Alert>}
          <LoginTextbox id="password" className={passwordEmptyError ? "LoginTextbox__Fail":"LoginTextbox"} label="Password" exampleLabel="Hopefully something secure" type="password" />
          {retypeEmptyError && <Alert variant='danger' className="LoginPage__Form__Alert">Passwords didn't match</Alert>}
          <LoginTextbox id="retypePassword" className={retypeEmptyError ? "LoginTextbox__Fail":"LoginTextbox"} label="Re-type Password" exampleLabel="Let's test your memory" type="password" />
          <div className="SignUpPage__Form__Buttons">
            <Button variant="success" onClick={this.handleClick} block>
              <p className="Button__TextSignUp">Sign up</p>
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage)
