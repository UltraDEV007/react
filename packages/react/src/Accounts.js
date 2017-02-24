import React, { PropTypes, Component } from 'react';
import AccountsClient from '@accounts/client';
import FormTypes from './FormTypes';
import Login from './Login';
import Signup from './Signup';

class Accounts extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    formType: PropTypes.string,
    DefaultLayout: PropTypes.node,
    loginComponents: PropTypes.object,
    signupComponents: PropTypes.object,
    Login: PropTypes.node,
    Signup: PropTypes.node,
  }
  static defaultProps = {
    formType: FormTypes.LOGIN,
    Login,
    Signup,
  }
  static childContextTypes = {
    accounts: PropTypes.object,
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
      DefaultLayout,
      loginComponents,
      signupComponents,
      Login, // eslint-disable-line no-shadow
      Signup, // eslint-disable-line no-shadow
    } = this.props;
    let ConnectedForm;
    switch (this.state.formType) {
      case FormTypes.LOGIN:
        ConnectedForm = () =>
          <Login
            accounts={accounts}
            DefaultLayout={DefaultLayout}
            {...loginComponents}
          />;
        break;
      case FormTypes.SIGNUP:
        ConnectedForm = () =>
          <Signup
            accounts={accounts}
            DefaultLayout={DefaultLayout}
            {...signupComponents}
          />;
        break;
      default:
        break;
    }
    return <ConnectedForm setFormType={this.setFormType} {...this.props} />;
  }
}

AccountsClient.ui.Accounts = Accounts;
export default Accounts;
