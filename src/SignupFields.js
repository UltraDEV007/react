import React, { PropTypes } from 'react';
import { AccountsClient, PasswordSignupFields } from '@accounts/accounts';

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
      jsx =
        (<AccountsClient.ui.EmailField
          value={fields.getIn(['email', 'value'])}
          errorText={fields.getIn(['email', 'errors']).first()}
          onChange={event => form.setField('email', event.target.value)}
        />);
      break;
    case USERNAME_ONLY:
      jsx =
      (<AccountsClient.ui.UsernameField
        value={fields.getIn(['username', 'value'])}
        errorText={fields.getIn(['username', 'errors']).first()}
        onChange={event => form.setField('username', event.target.value)}
      />);
      break;
    case USERNAME_AND_EMAIL:
      jsx = (
        <div>
          <AccountsClient.ui.UsernameField
            value={fields.getIn(['username', 'value'])}
            errorText={fields.getIn(['username', 'errors']).first()}
            onChange={event => form.setField('username', event.target.value)}
          />
          <AccountsClient.ui.EmailField
            value={fields.getIn(['email', 'value'])}
            errorText={fields.getIn(['email', 'errors']).first()}
            onChange={event => form.setField('email', event.target.value)}
          />
        </div>
      );
      break;
    case USERNAME_AND_OPTIONAL_EMAIL:
      jsx = (
        <div>
          <AccountsClient.ui.UsernameField
            value={fields.getIn(['username', 'value'])}
            errorText={fields.getIn(['username', 'errors']).first()}
            onChange={event => form.setField('username', event.target.value)}
          />
          <AccountsClient.ui.EmailOptionalField
            value={fields.getIn(['email', 'value'])}
            errorText={fields.getIn(['email', 'errors']).first()}
            onChange={event => form.setField('email', event.target.value)}
          />
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
