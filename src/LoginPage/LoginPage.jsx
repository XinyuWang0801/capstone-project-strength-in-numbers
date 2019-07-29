import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, LoginTextbox, ErrorMessage } from '../@components';
import Alert from 'react-bootstrap/Alert';
import * as Action from '../store/actions';
import './LoginPage.scss';

class LoginPage extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
      usernameError: false,
      passwordError: false,
    }
  }


  
  handleClick = (e) => {
    try {
      this.validateInputFilled()
    } catch(e) {
      return
    }
  }

  validateInputFilled = () => {
    const { username, password } = this.state
    if (username.length != 0) {
      this.setState({
        usernameError: false
      })
    } else {
      this.setState({
        usernameError: true
      })
      throw Error
    }
    if (password.length != 0) {
      this.setState({
        passwordError: false
      })
    } else {
      this.setState({
        passwordError: true
      })
      throw Error
    }
  }

  onChangeInput = (e) => {
    const { id, value } = e.target
    this.setState({
      [id]: value,
    })
  }

	render() {
    const { username, password, usernameError, passwordError } = this.state
		return (
			<div className="LoginPage">
				<div className="LoginPage__Form">
          <h1>Log In</h1>
          {usernameError && <Alert variant='danger' className="LoginPage__Form__Alert">Username cannot be empty</Alert>}
          <LoginTextbox id="username" className={usernameError ? "LoginTextbox__Fail":"LoginTextbox"} label="Email" exampleLabel="email@example.com" type="email" value={username} onChange={(e) => this.onChangeInput(e)} />
          {passwordError && <Alert variant='danger' className="LoginPage__Form__Alert">Password cannot be empty</Alert>}
          <LoginTextbox id="password" className={passwordError ? "LoginTextbox__Fail":"LoginTextbox"} label="Password" exampleLabel="Hopefully something secure" type="password" value={password} onChange={(e) => this.onChangeInput(e)} />
          <div className="LoginPage__Form__Buttons">
            <Button onClick={this.handleClick}>
              <p className="Button__TextLogIn">Log In</p>
            </Button>
            <Button variant="secondary">
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
