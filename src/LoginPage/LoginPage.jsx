import Alert from 'react-bootstrap/Alert';
import React from 'react';
import { Button, LoginTextbox, Navbar } from '../@components';
import { Icon, Spin } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../store/actions';

import './LoginPage.scss';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      usernameError: false,
      passwordError: false,
      loginError: false,
      loading: false,
    };
  }

  handleClick = async () => {
    const { verifyUser, navigateToExplore, history } = this.props;
    const { username, password } = this.state;
    if (this.validateInputFilled()) { return; }

    await this.setState({ loading: true });
    const hasLoginIssues = await verifyUser({ username, password });
    this.setState({ loginError: !hasLoginIssues });

    if (!hasLoginIssues) {
      await this.setState({ loading: false });
      return;
    }
    navigateToExplore(history);
  }

  validateInputFilled = () => {
    const { username, password } = this.state;

    const hasUsernameError = username.length === 0;
    const hasPasswordError = password.length === 0;

    this.setState({
      usernameError: hasUsernameError,
      passwordError: hasPasswordError,
    });

    return hasUsernameError || hasPasswordError;
  }

  onChangeInput = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  onSignUpClicked = () => {
    const { history, navigateToSignUp } = this.props;
    navigateToSignUp(history);
  }

  render() {
    const { CMS } = this.props;
    const { username, password, usernameError, passwordError, loginError, loading } = this.state;

    return (
      <div className="LoginPage">
        {loading && <Spin indicator={antIcon} style={{ zIndex: 3, display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }} />}
        {loading && <div className="SignUpPage__Loading" />}
        <Navbar />
        <div className="LoginPage__Form">
          <h1>{CMS.loginHeader}</h1>
          {loginError && <Alert variant="danger" className="LoginPage__Form__Alert">{CMS.failedLogin}</Alert>}
          {usernameError && <Alert variant="danger" className="LoginPage__Form__Alert">{CMS.emptyUsername}</Alert>}
          <LoginTextbox id="username" className={usernameError ? 'LoginTextbox__Fail' : 'LoginTextbox'} label="Email" exampleLabel="email@example.com" type="email" value={username} onChange={e => this.onChangeInput(e)} />
          {passwordError && <Alert variant="danger" className="LoginPage__Form__Alert">{CMS.emptyPassword}</Alert>}
          <LoginTextbox id="password" className={passwordError ? 'LoginTextbox__Fail' : 'LoginTextbox'} label="Password" exampleLabel="Hopefully something secure" type="password" value={password} onChange={e => this.onChangeInput(e)} />
          <div className="LoginPage__Form__Buttons">
            <Button onClick={this.handleClick} className="Button__Login">
              <p className="Button__TextLogIn">{CMS.loginButton}</p>
            </Button>
            <Button variant="secondary" className="Button__Signup" onClick={this.onSignUpClicked}>
              <p className="Button__TextSignUp">{CMS.signUpButton}</p>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CMS: state.CMS.login,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  verifyUser: Actions.verifyUser,
  navigateToExplore: Actions.navigateToExplore,
  navigateToSignUp: Actions.navigateToSignUp,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
