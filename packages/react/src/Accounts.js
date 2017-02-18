import React, { PropTypes, Component } from 'react';
import AccountsClient from '@accounts/client';
import { connectForm } from 'immutable-form';
import FormTypes from './FormTypes';
import loginForm from './loginForm';
import signupForm from './signupForm';

class Accounts extends Component {
  static propTypes = {
    formType: PropTypes.string,
    components: PropTypes.object,
  }
  static defaultProps = {
    formType: FormTypes.LOGIN,
  }
  constructor(props) {
    super(props);
    this.state = {
      formType: this.props.formType,
    };
  }
  setFormType = (formType) => {
    this.setState({
      formType,
    });
  }
  render() {
    const { Login, Signup } = this.props.components;
    let ConnectedForm;
    switch (this.state.formType) {
      case FormTypes.LOGIN:
        ConnectedForm = connectForm(loginForm)(<Login />);
        break;
      case FormTypes.SIGNUP:
        ConnectedForm = connectForm(signupForm)(<Signup />);
        break;
      default:
        break;
    }
    return <ConnectedForm setFormType={this.setFormType} {...this.props} />;
  }
}

AccountsClient.ui.Accounts = Accounts;
export default Accounts;
