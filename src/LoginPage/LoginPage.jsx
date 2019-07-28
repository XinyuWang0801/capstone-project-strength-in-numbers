import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, LoginTextbox } from '../@components';
import * as Action from '../store/actions';
import './LoginPage.scss';

class LoginPage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="LoginPage">
				<div className="LoginPage__Form">
          <h1>Log In</h1>
          <LoginTextbox label="Email" exampleLabel="email@example.com" type="email" />
          <LoginTextbox label="Password" exampleLabel="Hopefully something secure" type="password" />
          <div className="LoginPage__Form__Buttons">
            <Button>
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
