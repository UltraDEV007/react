import React, { PropTypes } from 'react';
import { PasswordSignupFields } from '@accounts/common';

const SignupFields = ({
  passwordSignupFields,
  Wrapper,
  SignupEmailField,
  SignupEmailOptionalField,
  SignupUsernameField,
  SignupPasswordField,
  SignupPasswordConfirmField,
}) => {
  const {
  EMAIL_ONLY,
  USERNAME_ONLY,
  USERNAME_AND_EMAIL,
  USERNAME_AND_OPTIONAL_EMAIL,
} = PasswordSignupFields;
  switch (passwordSignupFields) {
    case EMAIL_ONLY:
      return (
        <Wrapper>
          <SignupEmailField />
          <SignupPasswordField />
          <SignupPasswordConfirmField />
        </Wrapper>);
    case USERNAME_ONLY:
      return (
        <Wrapper>
          <SignupUsernameField />
          <SignupPasswordField />
          <SignupPasswordConfirmField />
        </Wrapper>
      );
    case USERNAME_AND_EMAIL:
      return (
        <Wrapper>
          <SignupUsernameField />
          <SignupEmailField />
          <SignupPasswordField />
          <SignupPasswordConfirmField />
        </Wrapper>
      );
    case USERNAME_AND_OPTIONAL_EMAIL:
      return (
        <Wrapper>
          <SignupUsernameField />
          <SignupEmailOptionalField />
          <SignupPasswordField />
          <SignupPasswordConfirmField />
        </Wrapper>
      );
    default:
      return null;
  }
};

SignupFields.propTypes = {
  passwordSignupFields: PropTypes.string,
  Wrapper: PropTypes.node,
  SignupEmailOptionalField: PropTypes.node,
  SignupEmailField: PropTypes.node,
  SignupUsernameField: PropTypes.node,
  SignupPasswordField: PropTypes.node,
  SignupPasswordConfirmField: PropTypes.node,
};

SignupFields.defaultProps = {
  //eslint-disable-next-line
  Wrapper: ({ children }) => <div>{children}</div>,
};

export default SignupFields;
