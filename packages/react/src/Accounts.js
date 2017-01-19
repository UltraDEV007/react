import React, { PropTypes, Component } from 'react';
import AccountsClient from '@accounts/client';
import { PasswordSignupFields, validators } from '@accounts/common';
import { Form, connectForm } from 'immutable-form';
import FormTypes from './FormTypes';

const validateUser = user => user.trim().length === 0 && 'Username or email is required';
const validateUsername = username => username.trim().length === 0 && 'Username is required';
const validateEmail = email => !validators.isEmail(email) && 'Not a valid email address';

const loginForm = () => new Form('login', {
  fields: {
    user: {
      validate: [
        validateUser,
      ],
    },
    password: {
      validate: [
        password => password.length === 0 && 'Password is required',
      ],
    },
  },
}).setSubmit(form =>
  AccountsClient.loginWithPassword(
    form.getField('user').get('value'),
    form.getField('password').get('value')
  ).catch((err) => {
    form.addError(err.serialize().message);
  }));

const signupForm = () => new Form('signup', {
  fields: ({
    password: {
      validate: [
        password =>
          password.length < AccountsClient.options().minimumPasswordLength
            && `Password must be at least ${AccountsClient.options().minimumPasswordLength} characters`,
      ],
    },
    passwordConfirm: {
      validate: [
        (confirmPassword, { form }) => confirmPassword !== form.getField('password').get('value')
          && 'Passwords do not match',
      ],
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
          return {
            email: {
              validate: [
                validateEmail,
              ],
            },
          };
        case USERNAME_ONLY:
          return {
            username: {
              validate: [
                validateUsername,
              ],
            },
          };
        case USERNAME_AND_EMAIL:
        case USERNAME_AND_OPTIONAL_EMAIL:
          return {
            username: {
              validate: [
                validateUsername,
              ],
            },
            email: {
              validate: [
                validateEmail,
              ],
            },
          };
        default:
          break;
      }
    })(),
  }),
}).setSubmit(form => AccountsClient.createUser({
  password: form.getField('password').get('value'),
  username: form.getField('username').get('value'),
  email: form.getField('email').get('value'),
}).catch((err) => {
  form.addError(err.serialize().message);
}));

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
