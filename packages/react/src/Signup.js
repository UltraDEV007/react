import React, { PropTypes } from 'react';
import { PasswordSignupFields } from '@accounts/common';

const Signup = ({
  DefaultLayout,
  Avatar,
  SignupFields,
  SignupEmailField,
  SignupEmailOptionalField,
  SignupUsernameField,
  SignupPasswordField,
  SignupPasswordConfirmField,
  SignupButton,
  passwordSignupFields,
  ...otherProps
}) =>
  <DefaultLayout>
    <Avatar />
    { (() => {
      const {
          EMAIL_ONLY,
          USERNAME_ONLY,
          USERNAME_AND_EMAIL,
          USERNAME_AND_OPTIONAL_EMAIL,
      } = PasswordSignupFields;
      switch (passwordSignupFields) {
        case EMAIL_ONLY:
          return (
            <SignupFields>
              <SignupEmailField />
              <SignupPasswordField />
              <SignupPasswordConfirmField />
            </SignupFields>);
        case USERNAME_ONLY:
          return (
            <SignupFields>
              <SignupUsernameField />
              <SignupPasswordField />
              <SignupPasswordConfirmField />
            </SignupFields>
          );
        case USERNAME_AND_EMAIL:
          return (
            <SignupFields>
              <SignupUsernameField />
              <SignupEmailField />
              <SignupPasswordField />
              <SignupPasswordConfirmField />
            </SignupFields>
          );
        case USERNAME_AND_OPTIONAL_EMAIL:
          return (
            <SignupFields>
              <SignupUsernameField />
              <SignupEmailOptionalField />
              <SignupPasswordField />
              <SignupPasswordConfirmField />
            </SignupFields>
          );
        default:
          return null;
      }
    })()
    }
    <SignupButton {...otherProps} />
  </DefaultLayout>;

Signup.propTypes = {
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
};

export default Signup;
