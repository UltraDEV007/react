import React, { PropTypes } from 'react';
import { AccountsClient, PasswordSignupFields } from '@accounts/accounts';

const emailProps = ({ form, fields }) => ({
  value: fields.getIn(['email', 'value']),
  errorText: fields.getIn(['email', 'errors']).first(),
  onChange: event => form.setField('email', event.target.value),
});

const usernameProps = ({ form, fields }) => ({
  value: fields.getIn(['username', 'value']),
  errorText: fields.getIn(['username', 'errors']).first(),
  onChange: event => form.setField('username', event.target.value),
});

const passwordProps = ({ form, fields }) => ({
  value: fields.getIn(['password', 'value']),
  errorText: fields.getIn(['password', 'errors']).first(),
  onChange: event => form.setField('password', event.target.value),
});

const passwordConfirmProps = ({ form, fields }) => ({
  value: fields.getIn(['passwordConfirm', 'value']),
  errorText: fields.getIn(['passwordConfirm', 'errors']).first(),
  onChange: event => form.setField('passwordConfirm', event.target.value),
});

const SignupFields = ({ form, fields }) => {
  const {
    EMAIL_ONLY,
    USERNAME_ONLY,
    USERNAME_AND_EMAIL,
    USERNAME_AND_OPTIONAL_EMAIL,
  } = PasswordSignupFields;
  let jsx;
  switch (AccountsClient.options().passwordSignupFields) {
    case EMAIL_ONLY:
      jsx = (
        <div>
          <AccountsClient.ui.EmailField {...emailProps({ form, fields })} />
          <AccountsClient.ui.PasswordField {...passwordProps({ form, fields })} />
          <AccountsClient.ui.PasswordConfirmField {...passwordConfirmProps({ form, fields })} />
        </div>);
      break;
    case USERNAME_ONLY:
      jsx = (
        <div>
          <AccountsClient.ui.UsernameField {...usernameProps({ form, fields })} />
          <AccountsClient.ui.PasswordField {...passwordProps({ form, fields })} />
          <AccountsClient.ui.PasswordConfirmField {...passwordConfirmProps({ form, fields })} />
        </div>
      );
      break;
    case USERNAME_AND_EMAIL:
      jsx = (
        <div>
          <AccountsClient.ui.UsernameField {...usernameProps({ form, fields })} />
          <AccountsClient.ui.EmailField {...emailProps({ form, fields })} />
          <AccountsClient.ui.PasswordField {...passwordProps({ form, fields })} />
          <AccountsClient.ui.PasswordConfirmField {...passwordConfirmProps({ form, fields })} />
        </div>
      );
      break;
    case USERNAME_AND_OPTIONAL_EMAIL:
      jsx = (
        <div>
          <AccountsClient.ui.UsernameField {...usernameProps({ form, fields })} />
          <AccountsClient.ui.EmailOptionalField {...emailProps({ form, fields })} />
          <AccountsClient.ui.PasswordField {...passwordProps({ form, fields })} />
          <AccountsClient.ui.PasswordConfirmField {...passwordConfirmProps({ form, fields })} />
        </div>
      );
      break;
    default:
      break;
  }
  return jsx;
};

SignupFields.propTypes = {
  form: PropTypes.object,
  fields: PropTypes.object,
};

export default SignupFields;
