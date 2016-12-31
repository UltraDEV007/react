import React, { PropTypes, Component } from 'react';
import { AccountsClient, PasswordSignupFields } from '@accounts/accounts';
import { Form, connectForm } from 'immutable-form';
import FormTypes from './FormTypes';

const loginForm = () => new Form('login', {
  fields: {
    user: {

    },
    password: {

    },
  },
});

const signupForm = () => new Form('signup', {
  fields: ({
    password: {

    },
    passwordConfirm: {

    },
    // eslint-disable-next-line consistent-return
    ...(() => {
      const {
      EMAIL_ONLY,
      USERNAME_ONLY,
      USERNAME_AND_EMAIL,
      USERNAME_AND_OPTIONAL_EMAIL,
    } = PasswordSignupFields;
      switch (AccountsClient.options().passwordSignupFields) {
        case EMAIL_ONLY:
          return { email: {} };
        case USERNAME_ONLY:
          return { username: {} };
        case USERNAME_AND_EMAIL:
        case USERNAME_AND_OPTIONAL_EMAIL:
          return { username: {}, email: {} };
        default:
          break;
      }
    })(),
  }),
});

class Accounts extends Component {
  static propTypes = {
    formType: PropTypes.string,
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
    let ConnectedForm;
    switch (this.state.formType) {
      case FormTypes.LOGIN:
        ConnectedForm = connectForm(loginForm)(<AccountsClient.ui.LoginForm />);
        break;
      case FormTypes.SIGNUP:
        ConnectedForm = connectForm(signupForm)(<AccountsClient.ui.SignupForm />);
        break;
      default:
        break;
    }
    return <ConnectedForm setFormType={this.setFormType} {...this.props} />;
  }
}

export default Accounts;
