import React, { PropTypes, Component } from 'react';
import FormTypes from './FormTypes';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

class Accounts extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    formType: PropTypes.string,
    loginComponents: PropTypes.object,
    signupComponents: PropTypes.object,
    forgotPasswordComponents: PropTypes.object,
    Login: PropTypes.node,
    Signup: PropTypes.node,
    ForgotPassword: PropTypes.node,
  }
  static defaultProps = {
    formType: FormTypes.LOGIN,
    Login,
    Signup,
    ForgotPassword,
  }
  static childContextTypes = {
    accounts: PropTypes.object,
    setFormType: PropTypes.func,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      formType: this.props.formType,
    };
  }
  getChildContext() {
    return {
      accounts: this.props.accounts,
      setFormType: this.setFormType,
    };
  }
  setFormType = (formType) => {
    this.setState({
      formType,
    });
  }
  render() {
    const {
      accounts,
      loginComponents,
      signupComponents,
      forgotPasswordComponents,
      Login, // eslint-disable-line no-shadow
      Signup, // eslint-disable-line no-shadow
      ForgotPassword, // eslint-disable-line no-shadow
      ...otherProps
    } = this.props;
    switch (this.state.formType) {
      case FormTypes.LOGIN:
        return (
          <Login
            accounts={accounts}
            setFormType={this.setFormType}
            {...loginComponents}
            {...otherProps}
          />);
      case FormTypes.SIGNUP:
        return (
          <Signup
            accounts={accounts}
            setFormType={this.setFormType}
            {...signupComponents}
            {...otherProps}
          />);
      case FormTypes.FORGOT_PASSWORD:
        return (
          <ForgotPassword
            accounts={accounts}
            setFormType={this.setFormType}
            {...forgotPasswordComponents}
            {...otherProps}
          />);
      default:
        break;
    }
    return null;
  }
}

export default Accounts;
