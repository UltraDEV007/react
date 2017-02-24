import React, { PropTypes, Component } from 'react';
import { PasswordSignupFields, validators } from '@accounts/common';

class Signup extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    DefaultLayout: PropTypes.node,
    Avatar: PropTypes.node,
    SignupFields: PropTypes.node,
    SignupEmailOptionalField: PropTypes.node,
    SignupEmailField: PropTypes.node,
    SignupUsernameField: PropTypes.node,
    SignupPasswordField: PropTypes.node,
    SignupPasswordConfirmField: PropTypes.node,
    LoginButton: PropTypes.node,
    SignupButton: PropTypes.node,
    Header: PropTypes.node,
    Footer: PropTypes.node,
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      emailField: '',
      emailFieldErrorText: '',
      usernameField: '',
      usernameFieldErrorText: '',
      passwordField: '',
      passwordFieldErrorText: '',
      passwordConfirmField: '',
      passwordConfirmFieldErrorText: '',
      isValidForm: false,
    };
  }
  onChangeEmailField = (e) => {
    this.setState({
      emailField: e.target.value,
    });
  }
  onChangeUsernameField = (e) => {
    this.setState({
      usernameField: e.target.value,
    });
  }
  onChangePasswordField = (e) => {
    this.setState({
      passwordField: e.target.value,
    });
  }
  onChangePasswordConfirmField = (e) => {
    this.setState({
      passwordConfirmField: e.target.value,
    });
  }
  onSignupClicked = async () => {
    const accounts = this.props.accounts;
    const type = accounts.options().passwordSignupFields;
    const {
          EMAIL_ONLY,
          USERNAME_ONLY,
          USERNAME_AND_EMAIL,
          USERNAME_AND_OPTIONAL_EMAIL,
      } = PasswordSignupFields;
    switch (type) {
      case EMAIL_ONLY:
        this.validateEmailField(this.state.emailField);
        break;
      case USERNAME_ONLY:
        this.validateUsernameField(this.state.usernameField);
        break;
      case USERNAME_AND_EMAIL:
        this.validateUsernameField(this.state.usernameField);
        this.validateEmailField(this.state.emailField);
        break;
      case USERNAME_AND_OPTIONAL_EMAIL:
        this.validateUsernameField(this.state.usernameField);
        if (this.state.emailField.length > 0) {
          this.validateEmailField(this.state.emailField);
        }
        break;
      default:
        break;
    }
    this.validatePasswordField(this.state.passwordField, this.state.passwordConfirmField);
    if (!this.state.hasErrors) {
      await accounts.loginWithPassword(this.state.userField, this.state.passwordField);
    }
  }
  validateEmailField = (field) => { // eslint-disable-line consistent-return
    if (validators.validateEmail(field)) {
      this.setState({
        emailFieldErrorText: '',
        hasErrors: false,
      });
    } else {
      this.setState({
        emailFieldErrorText: 'Invalid email',
        hasErrors: true,
      });
    }
  }
  validateUsernameField = (field) => { // eslint-disable-line consistent-return
    if (validators.validateUsername(field)) {
      this.setState({
        usernameFieldErrorText: '',
        hasErrors: false,
      });
    } else {
      this.setState({
        usernameFieldErrorText: 'Invalid username',
        hasErrors: true,
      });
    }
  }
  validatePasswordField = (field, passwordConfirmField) => {
    const minimumPasswordLength = this.props.accounts.options().minimumPasswordLength;
    if (validators.validatePassword(field) && field.length >= minimumPasswordLength) {
      this.setState({
        passwordFieldErrorText: '',
        hasErrors: false,
      });
    } else if (field.length < minimumPasswordLength) {
      this.setState({
        passwordFieldErrorText: `Password must be ${minimumPasswordLength} characters or longer`,
        hasErrors: true,
      });
    } else {
      this.setState({
        passwordFieldErrorText: 'Invalid password',
        hasErrors: true,
      });
    }
    if (field !== passwordConfirmField) {
      this.setState({
        passwordConfirmFieldErrorText: 'Passwords do not match',
        hasErrors: true,
      });
    } else {
      this.setState({
        passwordConfirmFieldErrorText: '',
        hasErrors: false,
      });
    }
  }
  renderSignupFields = () => {
    const {
      accounts,
      SignupFields,
      SignupEmailField,
      SignupEmailOptionalField,
      SignupUsernameField,
      SignupPasswordField,
      SignupPasswordConfirmField,
    } = this.props;
    const type = accounts.options().passwordSignupFields;
    const {
          EMAIL_ONLY,
          USERNAME_ONLY,
          USERNAME_AND_EMAIL,
          USERNAME_AND_OPTIONAL_EMAIL,
      } = PasswordSignupFields;
    switch (type) {
      case EMAIL_ONLY:
        return (
          <SignupFields>
            <SignupEmailField
              onChange={e => this.onChangeEmailField(e)}
              errorText={this.state.emailFieldErrorText}
            />
            <SignupPasswordField
              onChange={e => this.onChangePasswordField(e)}
              errorText={this.state.passwordFieldErrorText}
            />
            <SignupPasswordConfirmField
              onChange={e => this.onChangePasswordConfirmField(e)}
              errorText={this.state.passwordConfirmFieldErrorText}
            />
          </SignupFields>);
      case USERNAME_ONLY:
        return (
          <SignupFields>
            <SignupUsernameField
              onChange={e => this.onChangeUsernameField(e)}
              errorText={this.state.usernameFieldErrorText}
            />
            <SignupPasswordField
              onChange={e => this.onChangePasswordField(e)}
              errorText={this.state.passwordFieldErrorText}
            />
            <SignupPasswordConfirmField
              onChange={e => this.onChangePasswordConfirmField(e)}
              errorText={this.state.passwordConfirmFieldErrorText}
            />
          </SignupFields>
        );
      case USERNAME_AND_EMAIL:
        return (
          <SignupFields>
            <SignupUsernameField
              onChange={e => this.onChangeUsernameField(e)}
              errorText={this.state.usernameFieldErrorText}
            />
            <SignupEmailField
              onChange={e => this.onChangeEmailField(e)}
              errorText={this.state.emailFieldErrorText}
            />
            <SignupPasswordField
              onChange={e => this.onChangePasswordField(e)}
              errorText={this.state.passwordFieldErrorText}
            />
            <SignupPasswordConfirmField
              onChange={e => this.onChangePasswordConfirmField(e)}
              errorText={this.state.passwordConfirmFieldErrorText}
            />
          </SignupFields>
        );
      case USERNAME_AND_OPTIONAL_EMAIL:
        return (
          <SignupFields>
            <SignupUsernameField
              onChange={e => this.onChangeUsernameField(e)}
              errorText={this.state.usernameFieldErrorText}
            />
            <SignupEmailOptionalField
              onChange={e => this.onChangeEmailField(e)}
              errorText={this.state.emailFieldErrorText}
            />
            <SignupPasswordField
              onChange={e => this.onChangePasswordField(e)}
              errorText={this.state.passwordFieldErrorText}
            />
            <SignupPasswordConfirmField
              onChange={e => this.onChangePasswordConfirmField(e)}
              errorText={this.state.passwordConfirmFieldErrorText}
            />
          </SignupFields>
        );
      default:
        return null;
    }
  }
  render() {
    const {
      DefaultLayout,
      Avatar,
      SignupButton,
      Header,
      Footer,
    } = this.props;
    return (
      <DefaultLayout Header={Header} Footer={Footer}>
        <Avatar />
        { this.renderSignupFields() }
        <SignupButton onClick={e => this.onSignupClicked(e)} {...this.props} />
      </DefaultLayout>
    );
  }
}

export default Signup;
